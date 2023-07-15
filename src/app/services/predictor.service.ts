import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PredictorService {
  regresionUrl =
    'https://musicprosolutions.tech/backend/predictor/regresion_predict';
	// 'http://127.0.0.1:8000/backend/predictor/regresion_predict/';
  clasificationUrl =
    'https://musicprosolutions.tech/backend/predictor/clasification_predict';

  constructor(private http: HttpClient) {}

  getRegresionPrediction(
    round_starting_value: number,
    non_lethal_grenade: number,
    lethal_grenade: number
  ) {

	let params = {
		"roundStartingEquipmentValue": round_starting_value,
		"rNonLethalGrenadesThrown": non_lethal_grenade,
		"rLethalGrenadesThrown": lethal_grenade
	}

	return this.http.post<any>(this.regresionUrl, params);
  };

  getClasificationPrediction(
	rLethalGrenadesThrown: number,
	rNonLethalGrenadesThrown: number,
	primaryAssaultRifle: number,
	roundKills: number,
	roundHeadshots: number,
	roundFlankKills: number,
	roundStartingEquipmentValue: number
  ) {
	let params = {
		"rLethalGrenadesThrown": rLethalGrenadesThrown,
		"rNonLethalGrenadesThrown": rNonLethalGrenadesThrown,
		"primaryAssaultRifle": primaryAssaultRifle,
		"roundKills": roundKills,
		"roundHeadshots": roundHeadshots,
		"roundFlankKills": roundFlankKills,
		"roundStartingEquipmentValue": roundStartingEquipmentValue
	}

	return this.http.post<any>(this.clasificationUrl, params);
  }
}
