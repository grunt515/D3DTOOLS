function get_time_used(default_agility_param) {
	var default_agility = eval(default_agility_param);
	var multiplier;
	var time_used_per_agility;
	var energy_used_per_agility;

	switch (default_agility) {
		case 25:
			multiplier = 1;
			time_used_per_agility = 0.226277922077922;
			energy_used_per_agility = 0.742857142857143;
			break;
		case 26:
			multiplier = 2;
			time_used_per_agility = 0.225498701298701;
			energy_used_per_agility = 0.73892;
			break;
		case 27:
			multiplier = 3;
			time_used_per_agility = 0.22471948051948;
			energy_used_per_agility = 0.734982857142857;
			break;
		case 28:
			multiplier = 4;
			time_used_per_agility = 0.22394025974026;
			energy_used_per_agility = 0.731045714285714;
			break;
		case 29:
			multiplier = 5;
			time_used_per_agility = 0.223161038961039;
			energy_used_per_agility = 0.727108571428572;
			break;
		case 30:
			multiplier = 6;
			time_used_per_agility = 0.222381818181818;
			energy_used_per_agility = 0.723171428571428;
			break;
		case 31:
			multiplier = 7;
			time_used_per_agility = 0.221602597402597;
			energy_used_per_agility = 0.719234285714286;
			break;
		case 32:
			multiplier = 8;
			time_used_per_agility = 0.220823376623377;
			energy_used_per_agility = 0.715297142857143;
			break;
		case 33:
			multiplier = 9;
			time_used_per_agility = 0.220044155844156;
			energy_used_per_agility = 0.71136;
			break;
		case 34:
			multiplier = 10;
			time_used_per_agility = 0.219264935064935;
			energy_used_per_agility = 0.707422857142857;
			break;
		case 35:
			multiplier = 11;
			time_used_per_agility = 0.218485714285714;
			energy_used_per_agility = 0.703485714285714;
			break;
		case 36:
			multiplier = 12;
			time_used_per_agility = 0.217706493506494;
			energy_used_per_agility = 0.699548571428572;
			break;
		case 37:
			multiplier = 13;
			time_used_per_agility = 0.216927272727273;
			energy_used_per_agility = 0.695611428571429;
			break;
		case 38:
			multiplier = 14;
			time_used_per_agility = 0.216148051948052;
			energy_used_per_agility = 0.691674285714286;
			break;
		case 39:
			multiplier = 15;
			time_used_per_agility = 0.215368831168831;
			energy_used_per_agility = 0.687737142857143;
			break;
		case 40:
			multiplier = 16;
			time_used_per_agility = 0.21458961038961;
			energy_used_per_agility = 0.6838;
			break;
		case 41:
			multiplier = 17;
			time_used_per_agility = 0.21381038961039;
			energy_used_per_agility = 0.679862857142857;
			break;
		case 42:
			multiplier = 18;
			time_used_per_agility = 0.213031168831169;
			energy_used_per_agility = 0.675925714285714;
			break;
		case 43:
			multiplier = 19;
			time_used_per_agility = 0.212251948051948;
			energy_used_per_agility = 0.671988571428571;
			break;
		case 44:
			multiplier = 20;
			time_used_per_agility = 0.211472727272727;
			energy_used_per_agility = 0.668051428571429;
			break;
		case 45:
			multiplier = 21;
			time_used_per_agility = 0.210693506493507;
			energy_used_per_agility = 0.664114285714286;
			break;
		case 46:
			multiplier = 22;
			time_used_per_agility = 0.209914285714286;
			energy_used_per_agility = 0.660177142857143;
			break;
		case 47:
			multiplier = 23;
			time_used_per_agility = 0.209135064935065;
			energy_used_per_agility = 0.65624;
			break;
		case 48:
			multiplier = 24;
			time_used_per_agility = 0.208355844155844;
			energy_used_per_agility = 0.652302857142857;
			break;
		case 49:
			multiplier = 25;
			time_used_per_agility = 0.207576623376623;
			energy_used_per_agility = 0.648365714285714;
			break;
		case 50:
			multiplier = 26;
			time_used_per_agility = 0.206797402597403;
			energy_used_per_agility = 0.644428571428572;
			break;
		case 51:
			multiplier = 27;
			time_used_per_agility = 0.206018181818182;
			energy_used_per_agility = 0.640491428571429;
			break;
		case 52:
			multiplier = 28;
			time_used_per_agility = 0.205238961038961;
			energy_used_per_agility = 0.636554285714286;
			break;
		case 53:
			multiplier = 29;
			time_used_per_agility = 0.20445974025974;
			energy_used_per_agility = 0.632617142857143;
			break;
		case 54:
			multiplier = 30;
			time_used_per_agility = 0.203680519480519;
			energy_used_per_agility = 0.62868;
			break;
		case 55:
			multiplier = 31;
			time_used_per_agility = 0.202901298701299;
			energy_used_per_agility = 0.624742857142857;
			break;
		case 56:
			multiplier = 32;
			time_used_per_agility = 0.202122077922078;
			energy_used_per_agility = 0.620805714285714;
			break;
		case 57:
			multiplier = 33;
			time_used_per_agility = 0.201342857142857;
			energy_used_per_agility = 0.616868571428571;
			break;
		case 58:
			multiplier = 34;
			time_used_per_agility = 0.200563636363636;
			energy_used_per_agility = 0.612931428571429;
			break;
		case 59:
			multiplier = 35;
			time_used_per_agility = 0.199784415584416;
			energy_used_per_agility = 0.608994285714286;
			break;
		case 60:
			multiplier = 36;
			time_used_per_agility = 0.199005194805195;
			energy_used_per_agility = 0.605057142857143;
			break;
		case 61:
			multiplier = 37;
			time_used_per_agility = 0.198225974025974;
			energy_used_per_agility = 0.60112;
			break;
		case 62:
			multiplier = 38;
			time_used_per_agility = 0.197446753246753;
			energy_used_per_agility = 0.597182857142857;
			break;
		case 63:
			multiplier = 39;
			time_used_per_agility = 0.196667532467533;
			energy_used_per_agility = 0.593245714285714;
			break;
		case 64:
			multiplier = 40;
			time_used_per_agility = 0.195888311688312;
			energy_used_per_agility = 0.589308571428571;
			break;
		case 65:
			multiplier = 41;
			time_used_per_agility = 0.195109090909091;
			energy_used_per_agility = 0.585371428571429;
			break;
		case 66:
			multiplier = 42;
			time_used_per_agility = 0.19432987012987;
			energy_used_per_agility = 0.581434285714286;
			break;
		case 67:
			multiplier = 43;
			time_used_per_agility = 0.193550649350649;
			energy_used_per_agility = 0.577497142857143;
			break;
		case 68:
			multiplier = 44;
			time_used_per_agility = 0.192771428571429;
			energy_used_per_agility = 0.57356;
			break;
		case 69:
			multiplier = 45;
			time_used_per_agility = 0.191992207792208;
			energy_used_per_agility = 0.569622857142857;
			break;
		case 70:
			multiplier = 46;
			time_used_per_agility = 0.191212987012987;
			energy_used_per_agility = 0.565685714285714;
			break;
		case 71:
			multiplier = 47;
			time_used_per_agility = 0.190433766233766;
			energy_used_per_agility = 0.561748571428571;
			break;
		case 72:
			multiplier = 48;
			time_used_per_agility = 0.189654545454546;
			energy_used_per_agility = 0.557811428571429;
			break;
		case 73:
			multiplier = 49;
			time_used_per_agility = 0.188875324675325;
			energy_used_per_agility = 0.553874285714286;
			break;
		case 74:
			multiplier = 50;
			time_used_per_agility = 0.188096103896104;
			energy_used_per_agility = 0.549937142857143;
			break;
		case 75:
			multiplier = 51;
			time_used_per_agility = 0.187316883116883;
			energy_used_per_agility = 0.546;
			break;
		case 76:
			multiplier = 52;
			time_used_per_agility = 0.186537662337662;
			energy_used_per_agility = 0.542062857142857;
			break;
		case 77:
			multiplier = 53;
			time_used_per_agility = 0.185758441558442;
			energy_used_per_agility = 0.538125714285714;
			break;
		case 78:
			multiplier = 54;
			time_used_per_agility = 0.184979220779221;
			energy_used_per_agility = 0.534188571428571;
			break;
		case 79:
			multiplier = 55;
			time_used_per_agility = 0.1842;
			energy_used_per_agility = 0.530251428571428;
			break;
		case 80:
			multiplier = 56;
			time_used_per_agility = 0.183420779220779;
			energy_used_per_agility = 0.526314285714286;
			break;
		case 81:
			multiplier = 57;
			time_used_per_agility = 0.182641558441559;
			energy_used_per_agility = 0.522377142857143;
			break;
		case 82:
			multiplier = 58;
			time_used_per_agility = 0.181862337662338;
			energy_used_per_agility = 0.51844;
			break;
		case 83:
			multiplier = 59;
			time_used_per_agility = 0.181083116883117;
			energy_used_per_agility = 0.514502857142857;
			break;
		case 84:
			multiplier = 60;
			time_used_per_agility = 0.180303896103896;
			energy_used_per_agility = 0.510565714285714;
			break;
		case 85:
			multiplier = 61;
			time_used_per_agility = 0.179524675324675;
			energy_used_per_agility = 0.506628571428571;
			break;
		case 86:
			multiplier = 62;
			time_used_per_agility = 0.178745454545455;
			energy_used_per_agility = 0.502691428571429;
			break;
		case 87:
			multiplier = 63;
			time_used_per_agility = 0.177966233766234;
			energy_used_per_agility = 0.498754285714286;
			break;
		case 88:
			multiplier = 64;
			time_used_per_agility = 0.177187012987013;
			energy_used_per_agility = 0.494817142857143;
			break;
		case 89:
			multiplier = 65;
			time_used_per_agility = 0.176407792207792;
			energy_used_per_agility = 0.49088;
			break;
		case 90:
			multiplier = 66;
			time_used_per_agility = 0.175628571428572;
			energy_used_per_agility = 0.486942857142857;
			break;
		case 91:
			multiplier = 67;
			time_used_per_agility = 0.174849350649351;
			energy_used_per_agility = 0.483005714285714;
			break;
		case 92:
			multiplier = 68;
			time_used_per_agility = 0.17407012987013;
			energy_used_per_agility = 0.479068571428571;
			break;
		case 93:
			multiplier = 69;
			time_used_per_agility = 0.173290909090909;
			energy_used_per_agility = 0.475131428571429;
			break;
		case 94:
			multiplier = 70;
			time_used_per_agility = 0.172511688311688;
			energy_used_per_agility = 0.471194285714286;
			break;
		case 95:
			multiplier = 71;
			time_used_per_agility = 0.171732467532468;
			energy_used_per_agility = 0.467257142857143;
			break;
		case 96:
			multiplier = 72;
			time_used_per_agility = 0.170953246753247;
			energy_used_per_agility = 0.46332;
			break;
		case 97:
			multiplier = 73;
			time_used_per_agility = 0.170174025974026;
			energy_used_per_agility = 0.459382857142857;
			break;
		case 98:
			multiplier = 74;
			time_used_per_agility = 0.169394805194805;
			energy_used_per_agility = 0.455445714285714;
			break;
		case 99:
			multiplier = 75;
			time_used_per_agility = 0.168615584415584;
			energy_used_per_agility = 0.451508571428571;
			break;
		case 100:
			multiplier = 76;
			time_used_per_agility = 0.167836363636364;
			energy_used_per_agility = 0.447571428571429;
			break;
		case 101:
			multiplier = 77;
			time_used_per_agility = 0.167057142857143;
			energy_used_per_agility = 0.443634285714286;
			break;
		case 102:
			multiplier = 78;
			time_used_per_agility = 0.166277922077922;
			energy_used_per_agility = 0.439697142857143;
			break;
		case 103:
			multiplier = 79;
			time_used_per_agility = 0.165498701298701;
			energy_used_per_agility = 0.43576;
			break;
		case 104:
			multiplier = 80;
			time_used_per_agility = 0.164719480519481;
			energy_used_per_agility = 0.431822857142857;
			break;
		case 105:
			multiplier = 81;
			time_used_per_agility = 0.16394025974026;
			energy_used_per_agility = 0.427885714285714;
			break;
		case 106:
			multiplier = 82;
			time_used_per_agility = 0.163161038961039;
			energy_used_per_agility = 0.423948571428571;
			break;
		case 107:
			multiplier = 83;
			time_used_per_agility = 0.162381818181818;
			energy_used_per_agility = 0.420011428571429;
			break;
		case 108:
			multiplier = 84;
			time_used_per_agility = 0.161602597402597;
			energy_used_per_agility = 0.416074285714286;
			break;
		case 109:
			multiplier = 85;
			time_used_per_agility = 0.160823376623377;
			energy_used_per_agility = 0.412137142857143;
			break;
		case 110:
			multiplier = 86;
			time_used_per_agility = 0.160044155844156;
			energy_used_per_agility = 0.4082;
			break;
		case 111:
			multiplier = 87;
			time_used_per_agility = 0.159264935064935;
			energy_used_per_agility = 0.404262857142857;
			break;
		case 112:
			multiplier = 88;
			time_used_per_agility = 0.158485714285714;
			energy_used_per_agility = 0.400325714285714;
			break;
		case 113:
			multiplier = 89;
			time_used_per_agility = 0.157706493506494;
			energy_used_per_agility = 0.396388571428572;
			break;
		case 114:
			multiplier = 90;
			time_used_per_agility = 0.156927272727273;
			energy_used_per_agility = 0.392451428571429;
			break;
		case 115:
			multiplier = 91;
			time_used_per_agility = 0.156148051948052;
			energy_used_per_agility = 0.388514285714286;
			break;
		case 116:
			multiplier = 92;
			time_used_per_agility = 0.155368831168831;
			energy_used_per_agility = 0.384577142857143;
			break;
		case 117:
			multiplier = 93;
			time_used_per_agility = 0.15458961038961;
			energy_used_per_agility = 0.38064;
			break;
		case 118:
			multiplier = 94;
			time_used_per_agility = 0.15381038961039;
			energy_used_per_agility = 0.376702857142857;
			break;
		case 119:
			multiplier = 95;
			time_used_per_agility = 0.153031168831169;
			energy_used_per_agility = 0.372765714285714;
			break;
		case 120:
			multiplier = 96;
			time_used_per_agility = 0.152251948051948;
			energy_used_per_agility = 0.368828571428571;
			break;
		case 121:
			multiplier = 97;
			time_used_per_agility = 0.151472727272727;
			energy_used_per_agility = 0.364891428571429;
			break;
		case 122:
			multiplier = 98;
			time_used_per_agility = 0.150693506493506;
			energy_used_per_agility = 0.360954285714286;
			break;
		case 123:
			multiplier = 99;
			time_used_per_agility = 0.149914285714286;
			energy_used_per_agility = 0.357017142857143;
			break;
		case 124:
			multiplier = 100;
			time_used_per_agility = 0.149135064935065;
			energy_used_per_agility = 0.35308;
			break;
		default:
			multiplier = 0;
			time_used_per_agility = 0;
			energy_used_per_agility = 0;
			break;
	}

	document.getElementById('multiplier').value = multiplier;
	document.getElementById('time_used_per_agility').value = time_used_per_agility;
	document.getElementById('energy_used_per_agility').value = energy_used_per_agility;
}