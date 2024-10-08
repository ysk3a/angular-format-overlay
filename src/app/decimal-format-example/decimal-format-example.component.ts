import { Component } from '@angular/core';
// import { format, parse } from 'numerable';
import DecimalFormat, { RoundingMode } from 'decimal-format';

@Component({
  selector: 'app-decimal-format-example',
  standalone: true,
  imports: [],
  templateUrl: './decimal-format-example.component.html',
  styleUrl: './decimal-format-example.component.scss',
})
export class DecimalFormatExampleComponent {
  a: string[] = [
    // format(1500250.2, '0,0.00'),
    // format(0.25, '0.0 %'),
    // format(1200, '0.00 a'),
    // format(1500250.2, '0_0.00'),
  ];
  //=> '1,500,250.20'
  //=> '25.0 %'
  //=> '1.20 K'
  // s4 = parse('80.5%');
  //=> 0.805

  constructor() {
    const df = new DecimalFormat('#,##0.0#');
    let b = df.format(1234.995); // 1,235.0
    df.format(1234.956); // 1,234.96

    const df1 = new DecimalFormat('#,##0.0#%');
    df1.format(0.34995); // 35.0%

    const df2 = new DecimalFormat('#,##0.0#‰');
    df2.format(0.034993); // 34.99‰

    const df3 = new DecimalFormat('￥#,##0.00元');
    df3.format(1234.995); // ￥1,235.00元

    const df4 = new DecimalFormat('#,##0.0#');
    df4.setRoundingMode(RoundingMode.UP); // round away from zero
    df4.format(2.1); // 3.0
    df4.format(-2.1); // -3.0

    df4.setRoundingMode(RoundingMode.UNNECESSARY); // assert that no rounding is necessary
    df4.format(2.11); // 2.11
    // df4.format(2.123); // throw exception

    this.a = [
      b,
      df.format(1500250.2),
      df.format(1234.956),
      df1.format(0.34995),
      df2.format(0.034993),
      df3.format(1234.995),
      // df4.format(2.1),
      // df4.format(-2.1),
      // df4.format(2.11),
    ];
  }
}
