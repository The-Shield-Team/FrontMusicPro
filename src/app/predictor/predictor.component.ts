import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PredictorService } from '../services/predictor.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css'],
})
export class PredictorComponent {
  // Regresion attributes
  round_starting_value_r: FormControl = new FormControl();
  non_lethal_grenade_r: FormControl = new FormControl();
  lethal_grenade_r: FormControl = new FormControl();

  // Clasification attributes
  lethal_grenade_c: FormControl = new FormControl();
  non_lethal_grenade_c: FormControl = new FormControl();
  round_starting_value_c: FormControl = new FormControl();
  primary_assault_rifle_c: FormControl = new FormControl();
  round_kills_c: FormControl = new FormControl();
  round_headshots_c: FormControl = new FormControl();
  round_flank_kills_c: FormControl = new FormControl();

  error = '';

  result:any = '';
  constructor(
    private predictorService: PredictorService,
    public dialog: MatDialog
  ) {}

  getPredictedRegresionValue() {
    let round_starting_value = this.round_starting_value_r.value;
    let non_lethal_grenade = this.non_lethal_grenade_r.value;
    let lethal_grenade = this.lethal_grenade_r.value;

    if (
      round_starting_value == null ||
      non_lethal_grenade == null ||
      lethal_grenade == null
    ) {
      this.error = 'Por favor ingrese todos los valores';
      return;
    }

    this.predictorService
      .getRegresionPrediction(
        round_starting_value,
        non_lethal_grenade,
        lethal_grenade
      )
      .subscribe((data) => {
		this.result = Number(data.result);
		this.openDialog();
      });
  }

  getPredictedClasificationValue() {
    let rLethalGrenadesThrown = this.lethal_grenade_c.value;
    let rNonLethalGrenadesThrown = this.non_lethal_grenade_c.value;
    let roundStartingEquipmentValue = this.round_starting_value_c.value;
    let primaryAssaultRifle = this.primary_assault_rifle_c.value;
    let roundKills = this.round_kills_c.value;
    let roundHeadshots = this.round_headshots_c.value;
    let roundFlankKills = this.round_flank_kills_c.value;

    if (
      rLethalGrenadesThrown == null ||
      rNonLethalGrenadesThrown == null ||
      roundStartingEquipmentValue == null ||
      primaryAssaultRifle == null ||
      roundKills == null ||
      roundHeadshots == null ||
      roundFlankKills == null
    ) {
      this.error = 'Por favor ingrese todos los valores';
      return;
    }

    this.predictorService
      .getClasificationPrediction(
        rLethalGrenadesThrown,
        rNonLethalGrenadesThrown,
        primaryAssaultRifle,
        roundKills,
        roundHeadshots,
        roundFlankKills,
        roundStartingEquipmentValue
      )
      .subscribe((data) => {
		this.result = Boolean(data.result);
        this.openDialog();
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        result: this.result,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class DialogContentExampleDialog {

	result: any = '';
	header: any = 'Resultado de la predicción';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
	
    if (typeof this.data.result == 'boolean') {
      this.result = this.data.result
        ? 'El jugador gana la ronda'
        : 'El jugador pierde la ronda';
    } else if (typeof this.data.result == 'number') {
      this.result =
        'El jugador tiene una posibilidad de utilizar rifle de asalto como arma primaria de ' +
        (this.data.result * 100).toFixed(2) + '%'
    }

	console.log(this.result)
  }
}
