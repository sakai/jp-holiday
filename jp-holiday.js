//  ========================================================
//  jp-holidays.js ---- 祝日取得のための Date 拡張
//  Copyright 2008 Kiyoshi Sakai <sakai [アット] d4k [ドット] net>
//  2008/06/23 - JSでの最初のバージョン
//  2008/09/25 - 昭和23(1948)年からの過去を意識しました
//    参考にしたサイト
//      http://www.asahi-net.or.jp/~ci5m-nmr/misc/holiday.html 
//  2008/10/07 - バグ修正
//  2016/08/04 - 春分、秋分の日追加、山の日追加
//  version: 0.0.3
//  ========================================================

Date.prototype.one_day_epoch = 1000 * 60 * 60 * 24;

Date.prototype.jp_hol_vernal_equinox_days = {
	1925 : '3/21',
	1926 : '3/21',
	1927 : '3/21',
	1928 : '3/21',
	1929 : '3/21',
	1930 : '3/21',
	1931 : '3/21',
	1932 : '3/21',
	1933 : '3/21',
	1934 : '3/21',
	1935 : '3/21',
	1936 : '3/21',
	1937 : '3/21',
	1938 : '3/21',
	1939 : '3/21',
	1940 : '3/21',
	1941 : '3/21',
	1942 : '3/21',
	1943 : '3/21',
	1944 : '3/21',
	1945 : '3/21',
	1946 : '3/21',
	1947 : '3/21',
	1948 : '3/21',
	1949 : '3/21',
	1950 : '3/21',
	1951 : '3/21',
	1952 : '3/21',
	1953 : '3/21',
	1954 : '3/21',
	1955 : '3/21',
	1956 : '3/21',
	1957 : '3/21',
	1958 : '3/21',
	1959 : '3/21',
	1960 : '3/20',
	1961 : '3/21',
	1962 : '3/21',
	1963 : '3/21',
	1964 : '3/20',
	1965 : '3/21',
	1966 : '3/21',
	1967 : '3/21',
	1968 : '3/20',
	1969 : '3/21',
	1970 : '3/21',
	1971 : '3/21',
	1972 : '3/20',
	1973 : '3/21',
	1974 : '3/21',
	1975 : '3/21',
	1976 : '3/20',
	1977 : '3/21',
	1978 : '3/21',
	1979 : '3/21',
	1980 : '3/20',
	1981 : '3/21',
	1982 : '3/21',
	1983 : '3/21',
	1984 : '3/20',
	1985 : '3/21',
	1986 : '3/21',
	1987 : '3/21',
	1988 : '3/20',
	1989 : '3/21',
	1990 : '3/21',
	1991 : '3/21',
	1992 : '3/20',
	1993 : '3/20',
	1994 : '3/21',
	1995 : '3/21',
	1996 : '3/20',
	1997 : '3/20',
	1998 : '3/21',
	1999 : '3/21',

	2000 : '3/20',
	2001 : '3/20',
	2002 : '3/21',
	2003 : '3/21',
	2004 : '3/20',
	2005 : '3/20',
	2006 : '3/21',
	2007 : '3/21',
	2008 : '3/20',
	2009 : '3/20',
	2010 : '3/21',
	2011 : '3/21',
	2012 : '3/20',
	2013 : '3/20',
	2014 : '3/21',
	2015 : '3/21',
	2016 : '3/20',
	2017 : '3/20'
};

Date.prototype.jp_hol_autumnal_equinox_days = {
	1925 : '9/23',
	1926 : '9/24',
	1927 : '9/24',
	1928 : '9/23',
	1929 : '9/23',
	1930 : '9/24',
	1931 : '9/24',
	1932 : '9/23',
	1933 : '9/23',
	1934 : '9/24',
	1935 : '9/24',
	1936 : '9/23',
	1937 : '9/23',
	1938 : '9/24',
	1939 : '9/24',
	1940 : '9/23',
	1941 : '9/23',
	1942 : '9/24',
	1943 : '9/24',
	1944 : '9/23',
	1945 : '9/23',
	1946 : '9/24',
	1947 : '9/24',
	1948 : '9/23',
	1949 : '9/23',
	1950 : '9/23',
	1951 : '9/24',
	1952 : '9/23',
	1953 : '9/23',
	1954 : '9/23',
	1955 : '9/24',
	1956 : '9/23',
	1957 : '9/23',
	1958 : '9/23',
	1959 : '9/24',
	1960 : '9/23',
	1961 : '9/23',
	1962 : '9/23',
	1963 : '9/24',
	1964 : '9/23',
	1965 : '9/23',
	1966 : '9/23',
	1967 : '9/24',
	1968 : '9/23',
	1969 : '9/23',
	1970 : '9/23',
	1971 : '9/24',
	1972 : '9/23',
	1973 : '9/23',
	1974 : '9/23',
	1975 : '9/24',
	1976 : '9/23',
	1977 : '9/23',
	1978 : '9/23',
	1979 : '9/24',
	1980 : '9/23',
	1981 : '9/23',
	1982 : '9/23',
	1983 : '9/23',
	1984 : '9/23',
	1985 : '9/23',
	1986 : '9/23',
	1987 : '9/23',
	1988 : '9/23',
	1989 : '9/23',
	1990 : '9/23',
	1991 : '9/23',
	1992 : '9/23',
	1993 : '9/23',
	1994 : '9/23',
	1995 : '9/23',
	1996 : '9/23',
	1997 : '9/23',
	1998 : '9/23',
	1999 : '9/23',

	2000 : '9/23',
	2001 : '9/23',
	2002 : '9/23',
	2003 : '9/23',
	2004 : '9/23',
	2005 : '9/23',
	2006 : '9/23',
	2007 : '9/23',
	2008 : '9/23',
	2009 : '9/23',
	2010 : '9/23',
	2011 : '9/23',
	2012 : '9/22',
	2013 : '9/23',
	2014 : '9/23',
	2015 : '9/23',
	2016 : '9/22',
	2017 : '9/23'
};

Date.prototype.getJpHolNationalFoundationDay = function (y) {
	return 1967 <= y ? '2/11' : null;
}

Date.prototype.getJpHolEquinoxDateCalc = function (y, va) {

//	1太陽年は（西暦2000年において）365.24219日（365.24219040日）となっており、100年間で約0.53秒ずつ短くなっている。
//	2000年の太陽の春分点通過日
//	3月20.69115日
//	2000年の太陽の秋分点通過日
//	9月23.09日

	var equinox;
	switch(va) {
	case 'vernal':
		// date('2000/03/20').getTime() + (60 * 60 * 24 * 0.69115)
		equinox = 953537715.36;
		break;
	case 'autumnal':
		// date('2000-09-23').getTime() + (60 * 60 * 24 * 0.09)
		equinox = 969642576.00;
		break;
	}

	// 2000年の春(秋)分点 + 2000年から太陽年の計算 + 太陽年の誤差修正（100年間で約0.53短くなりつつある）
	var i;
	var y_sum = 0;
	for(i = 0; i > y - 2000; i--) {
		y_sum += i;
	}
	for(i = 0; i < y - 2000; i++) {
		y_sum += i;
	}
//	var target_date_equinox = new Date(equinox + (3155692525056 * (y - 2000) / 100000) + (53 * (array_sum(range(0, y - 2000))) / 10000));
	var target_date_equinox = new Date((equinox + (3155692525056 * (y - 2000) / 100000) + (53 * y_sum / 10000)) * 1000);

	return (target_date_equinox.getMonth() + 1) + '/' + target_date_equinox.getDate();

}

Date.prototype.isJpHolVernalEquinoxDay = function (y, m_d) {
	var ve_m_d;
	if(this.jp_hol_vernal_equinox_days[y]) {
		ve_m_d = this.jp_hol_vernal_equinox_days[y];
	} else {
		ve_m_d = this.getJpHolEquinoxDateCalc(y, 'vernal');
		this.jp_hol_vernal_equinox_days[y] = ve_m_d;
	}
	return m_d == ve_m_d ? true : false;
}

Date.prototype.isJpHolAutumnalEquinoxDay = function (y, m_d) {
//	return m_d == (this.jp_hol_autumnal_equinox_days[y] ? this.jp_hol_autumnal_equinox_days[y] : this.getJpHolEquinoxDateCalc(y, 'autumnal'));
	var va_m_d;
	if(this.jp_hol_autumnal_equinox_days[y]) {
		va_m_d = this.jp_hol_autumnal_equinox_days[y];
	} else {
		va_m_d = this.getJpHolEquinoxDateCalc(y, 'autumnal');
		this.jp_hol_autumnal_equinox_days[y] = va_m_d;
	}
	return m_d == va_m_d ? true : false;
}

Date.prototype.isJpHoliday = function(by_date_itself) {

	var y = this.getFullYear();
	var m_d = (this.getMonth() + 1) + '/' + this.getDate();
	var y_m_d = y + '/' + m_d;	// 2008-10-07 追加 バグ修正ごめん
	var national_foundation_m_d = this.getJpHolNationalFoundationDay(y);


	if(this.is_jp_holiday && typeof(this.is_jp_holiday) == 'boolean' && this.y_m_d && this.y_m_d == y_m_d) {
		return this.is_jp_holiday;
	}

	this.y_m_d = y_m_d;

	switch(m_d) {
	case '1/1':
		if(1949 <= y) {
			this.jp_hol_name = '元日';
			this.jp_hol_engl = 'New Year\'s Day';
			this.jp_hol_desc = '年のはじめを祝う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '1/15':
		if(1949 <= y && y <= 1999) {
			this.jp_hol_name = '成人の日';
			this.jp_hol_engl = 'Coming of Age Day';
			this.jp_hol_desc = 'おとなになったことを自覚し、みずから生き抜こうとする青年を祝いはげます。';
			this.is_jp_holiday = true;
			return true;	// 2008-10-07 追加 バグ修正ごめん
		}
		break;
	case '4/29':
		if(1927 <= y && y <= 1988) {
			this.jp_hol_name = '天皇誕生日';
			this.jp_hol_engl = 'Emperor\'s Birthday';
			this.jp_hol_desc = '天皇の誕生日を祝う。';
			this.is_jp_holiday = true;
			return true;
		} else if(1989 <= y && y <= 2006) {
			this.jp_hol_name = 'みどりの日';
			this.jp_hol_engl = 'Greenery Day';
			this.jp_hol_desc = '自然に親しむとともにその恩恵に感謝し、豊かな心をはぐくむ。';
			this.is_jp_holiday = true;
			return true;
		} else if(2007 <= y) {
			this.jp_hol_name = '昭和の日';
			this.jp_hol_engl = 'Showa Day';	// 正式な発表ではありません…
			this.jp_hol_desc = '激動の日々を経て、復興を遂げた昭和の時代を顧み、国の将来に思いをいたす。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '5/3':
		if(1949 <= y) {
			this.jp_hol_name = '憲法記念日';
			this.jp_hol_engl = 'Constitution Memorial Day';
			this.jp_hol_desc = '日本国憲法の施行を記念し、国の成長を期する。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '5/4':
		if(2007 <= y) {
			this.jp_hol_name = 'みどりの日';
			this.jp_hol_engl = 'Greenery Day';
			this.jp_hol_desc = '自然に親しむとともにその恩恵に感謝し、豊かな心をはぐくむ。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '5/5':
		if(1949 <= y) {
			this.jp_hol_name = 'こどもの日';
			this.jp_hol_engl = 'Children\'s Day';
			this.jp_hol_desc = 'こどもの人格を重んじ、こどもの幸福をはかるとともに、母に感謝する。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '7/20':
		if(1996 <= y && y <= 2002) {
			this.jp_hol_name = '海の日';
			this.jp_hol_engl = 'Marine Day';
			this.jp_hol_desc = '海の恩恵に感謝するとともに、海洋国日本の繁栄を願う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '8/11':
		if(2016 <= y) {
			this.jp_hol_name = '山の日';
			this.jp_hol_engl = 'Mountain Day';
			this.jp_hol_desc = '山に親しむ機会を得て、山の恩恵に感謝する。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '9/15':
		if(1967 <= y && y <= 2002) {
			this.jp_hol_name = '敬老の日';
			this.jp_hol_engl = 'Respect for the Aged Day';
			this.jp_hol_desc = '多年にわたり社会につくしてきた老人を敬愛し、長寿を祝う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '10/10':
		if(1966 <= y && y <= 1999) {
			this.jp_hol_name = '体育の日';
			this.jp_hol_engl = 'Health and Sports Day';
			this.jp_hol_desc = 'スポーツにしたしみ、健康な心身をつちかう。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '11/3':
		if(1948 <= y) {
			this.jp_hol_name = '文化の日';
			this.jp_hol_engl = 'National Culture Day';
			this.jp_hol_desc = '自由と平和を愛し、文化をすすめる。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '11/23':
		if(1948 <= y) {
			this.jp_hol_name = '勤労感謝の日';
			this.jp_hol_engl = 'Labor Thanksgiving Day';
			this.jp_hol_desc = '勤労をたっとび、生産を祝い、国民たがいに感謝しあう。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '12/23':
		if(1989 <= y) {
			this.jp_hol_name = '天皇誕生日';
			this.jp_hol_engl = 'Emperor\'s Birthday';
			this.jp_hol_desc = '天皇の誕生日を祝う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case national_foundation_m_d:	// 政令で定める日
		if(1967 <= y) {
			this.jp_hol_name = '建国記念の日';
			this.jp_hol_engl = 'National Foundation Day';
			this.jp_hol_desc = '建国をしのび、国を愛する心を養う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	}


	switch((this.getMonth() + 1) + '-' + Math.ceil(this.getDate() / 7) + '-' + this.getDay()) {
	case '1-2-1':	// １月の第２月曜日
		if(2000 <= y) {
			this.jp_hol_name = '成人の日';
			this.jp_hol_engl = 'Coming of Age Day';
			this.jp_hol_desc = 'おとなになったことを自覚し、みずから生き抜こうとする青年を祝いはげます。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '7-3-1':	// ７月の第３月曜日
		if(2003 <= y) {
			this.jp_hol_name = '海の日';
			this.jp_hol_engl = 'Marine Day';
			this.jp_hol_desc = '海の恩恵に感謝するとともに、海洋国日本の繁栄を願う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '9-3-1':	// ９月の第３月曜日
		if(2003 <= y) {
			this.jp_hol_name = '敬老の日';
			this.jp_hol_engl = 'Respect for the Aged Day';
			this.jp_hol_desc = '多年にわたり社会につくしてきた老人を敬愛し、長寿を祝う。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	case '10-2-1':	// １０月の第２月曜日
		if(2000 <= y) {
			this.jp_hol_name = '体育の日';
			this.jp_hol_engl = 'Health and Sports Day';
			this.jp_hol_desc = 'スポーツにしたしみ、健康な心身をつちかう。';
			this.is_jp_holiday = true;
			return true;
		}
		break;
	}

	if(this.isJpHolVernalEquinoxDay(y, m_d)) {
		if(1949 <= y) {
			this.jp_hol_name = '春分の日';
			this.jp_hol_engl = 'Vernal Equinox';
			this.jp_hol_desc = '自然をたたえ、生物をいつくしむ。';
			this.is_jp_holiday = true;
			return true;
		}
	}
	if(this.isJpHolAutumnalEquinoxDay(y, m_d)) {
		if(1948 <= y) {
			this.jp_hol_name = '秋分の日';
			this.jp_hol_engl = 'Autumnal Equinox';
			this.jp_hol_desc = '祖先をうやまい、なくなった人々をしのぶ。';
			this.is_jp_holiday = true;
			return true;
		}
	}

	if(by_date_itself) {
		this.jp_hol_name = null;
		this.jp_hol_engl = null;
		this.jp_hol_desc = null;
		this.is_jp_holiday = false;
		return false;
	}

	var date_before = new Date(this.getTime() - this.one_day_epoch);
	if(date_before.isJpHoliday(true)) {	// 前日が祝日

		if(date_before.getDay() == 0) {	// 前日が祝日かつ日曜ならば
			this.jp_hol_name = '振替休日';
			this.jp_hol_engl = 'Substitute Holiday'; 
			this.jp_hol_desc = null;
			this.is_jp_holiday = true;
			return true;
		}

		if(1986 <= y) {
			var date_after = new Date(this.getTime() + this.one_day_epoch);
			if(date_after.isJpHoliday(true)) {		// 前日も翌日も祝日ならば
				this.jp_hol_name = '国民の休日';
				this.jp_hol_engl = 'Holiday for a Nation';
				this.jp_hol_desc = null;
				this.is_jp_holiday = true;
				return true;
			}
		}

		if(2007 <= y) {
			date_before.setTime(date_before.getTime() - this.one_day_epoch);
			while(date_before.isJpHoliday(true)) {		// 前日以前が祝日の連続になっている場合
				if(date_before.getDay() == 0) {	// 前日以前が祝日の連続で、日曜が重なる場合
					this.jp_hol_name = '振替休日';
					this.jp_hol_engl = 'Substitute Holiday'; 
					this.jp_hol_desc = null;
					this.is_jp_holiday = true;
					return true;
				}
				date_before.setTime(date_before.getTime() - this.one_day_epoch);
			}
		}

	}


	this.jp_hol_name = null;
	this.jp_hol_engl = null;
	this.jp_hol_desc = null;
	this.is_jp_holiday = false;
	return false;

}
