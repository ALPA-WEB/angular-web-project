import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
interface PieData {
  name: string;
  value: number;
}
@Component({
  selector: 'ngx-echarts-pie',
  template: `
      <div echarts [options]="options" class="echart"></div>
  `,
})
export class UniversityPieComponent implements OnInit, AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription: any;
  pieSubscription: any;
  piedataCol: AngularFirestoreCollection<PieData>;
  piedata: Observable<PieData[]>;
  outcome_name: string[] = [];
  outcome_value: PieData[] = [];
  piedatas: PieData = {
    value: 0,
    name: '',
  }

  test: PieData[] = [
    { value: 335, name: 'Germany' },
    { value: 1548, name: 'USA' },
  ]

  
  constructor(private theme: NbThemeService, private afs: AngularFirestore) {
  }
  ngOnInit(): void {
    this.piedataCol = this.afs.collection('studentCouncil').doc('university').collection('pie');
    this.piedata = this.piedataCol.valueChanges();
    this.pieSubscription = this.piedata.subscribe((data) => { for ( const el of data ) {
      this.outcome_name.push(el.name);
      this.piedatas.value = el.value;
      this.piedatas.name = el.name;
      this.outcome_value.push(this.piedatas);

      alert("a" + this.outcome_value);
      alert("as" + this.piedatas.value);
      // this.outcome_value.push({name:el.name, value:el.value});

    } });

    alert("a" + this.outcome_value);
  }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      console.warn(this.outcome_name);
      console.warn(this.outcome_value);
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.outcome_name,
          textStyle: {
            color: echarts.textColor,
          },
      },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.outcome_value,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
