{"filter":false,"title":"statistics.js","tooltip":"/assets/js/statistics.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":396,"column":21},"end":{"row":396,"column":22},"action":"insert","lines":["5"],"id":1754}],[{"start":{"row":395,"column":19},"end":{"row":395,"column":20},"action":"remove","lines":["4"],"id":1755}],[{"start":{"row":395,"column":19},"end":{"row":395,"column":20},"action":"insert","lines":["2"],"id":1756}],[{"start":{"row":395,"column":19},"end":{"row":395,"column":20},"action":"remove","lines":["2"],"id":1757}],[{"start":{"row":395,"column":19},"end":{"row":395,"column":20},"action":"insert","lines":["4"],"id":1758}],[{"start":{"row":390,"column":45},"end":{"row":391,"column":0},"action":"insert","lines":["",""],"id":1784},{"start":{"row":391,"column":0},"end":{"row":391,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":391,"column":4},"end":{"row":392,"column":0},"action":"insert","lines":["var chart = dc.pieChart(\"#test\");",""],"id":1785}],[{"start":{"row":391,"column":37},"end":{"row":392,"column":0},"action":"remove","lines":["",""],"id":1786}],[{"start":{"row":391,"column":30},"end":{"row":391,"column":34},"action":"remove","lines":["test"],"id":1787},{"start":{"row":391,"column":30},"end":{"row":391,"column":65},"action":"insert","lines":["#gender-unemployment-rate-pie-chart"]}],[{"start":{"row":391,"column":29},"end":{"row":391,"column":30},"action":"remove","lines":["#"],"id":1788}],[{"start":{"row":391,"column":13},"end":{"row":391,"column":14},"action":"insert","lines":["2"],"id":1789}],[{"start":{"row":391,"column":8},"end":{"row":391,"column":9},"action":"remove","lines":["c"],"id":1790}],[{"start":{"row":391,"column":8},"end":{"row":391,"column":9},"action":"insert","lines":["p"],"id":1791},{"start":{"row":391,"column":9},"end":{"row":391,"column":10},"action":"insert","lines":["i"]},{"start":{"row":391,"column":10},"end":{"row":391,"column":11},"action":"insert","lines":["e"]},{"start":{"row":391,"column":11},"end":{"row":391,"column":12},"action":"insert","lines":["C"]}],[{"start":{"row":393,"column":15},"end":{"row":393,"column":16},"action":"insert","lines":["2"],"id":1792}],[{"start":{"row":393,"column":16},"end":{"row":393,"column":55},"action":"remove","lines":["('#gender-unemployment-rate-pie-chart')"],"id":1793}],[{"start":{"row":393,"column":4},"end":{"row":393,"column":7},"action":"remove","lines":["dc."],"id":1794}],[{"start":{"row":63,"column":45},"end":{"row":64,"column":0},"action":"insert","lines":["",""],"id":1795},{"start":{"row":64,"column":0},"end":{"row":64,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":64,"column":4},"end":{"row":65,"column":0},"action":"insert","lines":["    var pieChart2 = dc.pieChart(\"#gender-unemployment-rate-pie-chart\");",""],"id":1796}],[{"start":{"row":64,"column":4},"end":{"row":64,"column":8},"action":"remove","lines":["    "],"id":1797}],[{"start":{"row":66,"column":15},"end":{"row":66,"column":47},"action":"remove","lines":["('#unemployment-rate-pie-chart')"],"id":1798}],[{"start":{"row":64,"column":31},"end":{"row":64,"column":70},"action":"remove","lines":["(\"#gender-unemployment-rate-pie-chart\")"],"id":1799},{"start":{"row":64,"column":31},"end":{"row":64,"column":63},"action":"insert","lines":["('#unemployment-rate-pie-chart')"]}],[{"start":{"row":66,"column":4},"end":{"row":66,"column":7},"action":"remove","lines":["dc."],"id":1800}],[{"start":{"row":64,"column":16},"end":{"row":64,"column":17},"action":"remove","lines":["2"],"id":1801}],[{"start":{"row":64,"column":16},"end":{"row":64,"column":17},"action":"insert","lines":["1"],"id":1802}],[{"start":{"row":66,"column":12},"end":{"row":66,"column":13},"action":"insert","lines":["1"],"id":1803}],[{"start":{"row":389,"column":45},"end":{"row":389,"column":72},"action":"remove","lines":["totalFemaleUnemploymentRate"],"id":1804},{"start":{"row":389,"column":45},"end":{"row":389,"column":66},"action":"insert","lines":["totalUnemploymentRate"]}],[{"start":{"row":390,"column":62},"end":{"row":390,"column":111},"action":"remove","lines":[".reduceSum(dc.pluck('totalMaleUnemploymentRate'))"],"id":1805}],[{"start":{"row":391,"column":4},"end":{"row":392,"column":45},"action":"remove","lines":["var minRate2 = gender_dim.bottom(1)[0].date;","    var maxRate2 = gender_dim.top(1)[0].date;"],"id":1806},{"start":{"row":391,"column":0},"end":{"row":391,"column":4},"action":"remove","lines":["    "]},{"start":{"row":390,"column":63},"end":{"row":391,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":389,"column":21},"end":{"row":389,"column":69},"action":"remove","lines":["ndx.dimension(dc.pluck('totalUnemploymentRate'))"],"id":1807},{"start":{"row":389,"column":21},"end":{"row":389,"column":123},"action":"insert","lines":["dim = ndx.dimension(function(d) {return [d.totalFemaleUnemploymentRate, d.totalMaleUnemploymentRate] }"]}],[{"start":{"row":389,"column":20},"end":{"row":389,"column":27},"action":"remove","lines":[" dim = "],"id":1808}],[{"start":{"row":389,"column":20},"end":{"row":389,"column":21},"action":"insert","lines":[" "],"id":1809}],[{"start":{"row":389,"column":117},"end":{"row":389,"column":118},"action":"insert","lines":[")"],"id":1810}],[{"start":{"row":390,"column":4},"end":{"row":400,"column":50},"action":"remove","lines":["var draw_gender_unemployment_rate_pie = gender_dim.group();","    var pieChart2 = dc.pieChart(\"#gender-unemployment-rate-pie-chart\");","","    pieChart2","        .height(330)","        .radius(90)","        .slicesCap(4)","        .innerRadius(50)","        .transitionDuration(1500)","        .dimension(gender_dim)","        .group(draw_gender_unemployment_rate_pie);"],"id":1811}],[{"start":{"row":391,"column":1},"end":{"row":392,"column":0},"action":"insert","lines":["",""],"id":1812},{"start":{"row":392,"column":0},"end":{"row":393,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":394,"column":0},"end":{"row":394,"column":1},"action":"insert","lines":["/"],"id":1813},{"start":{"row":394,"column":1},"end":{"row":394,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":414,"column":0},"end":{"row":414,"column":1},"action":"insert","lines":["*"],"id":1814},{"start":{"row":414,"column":1},"end":{"row":414,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":393,"column":0},"end":{"row":403,"column":50},"action":"insert","lines":["var draw_gender_unemployment_rate_pie = gender_dim.group();","    var pieChart2 = dc.pieChart(\"#gender-unemployment-rate-pie-chart\");","","    pieChart2","        .height(330)","        .radius(90)","        .slicesCap(4)","        .innerRadius(50)","        .transitionDuration(1500)","        .dimension(gender_dim)","        .group(draw_gender_unemployment_rate_pie);"],"id":1815}],[{"start":{"row":389,"column":0},"end":{"row":390,"column":0},"action":"remove","lines":["    var gender_dim = ndx.dimension(function(d) {return [d.totalFemaleUnemploymentRate, d.totalMaleUnemploymentRate] });",""],"id":1816}],[{"start":{"row":391,"column":0},"end":{"row":392,"column":0},"action":"insert","lines":["    var gender_dim = ndx.dimension(function(d) {return [d.totalFemaleUnemploymentRate, d.totalMaleUnemploymentRate] });",""],"id":1817}],[{"start":{"row":391,"column":119},"end":{"row":392,"column":0},"action":"remove","lines":["",""],"id":1818}],[{"start":{"row":389,"column":0},"end":{"row":389,"column":4},"action":"remove","lines":["    "],"id":1819},{"start":{"row":391,"column":0},"end":{"row":391,"column":4},"action":"remove","lines":["    "]},{"start":{"row":391,"column":44},"end":{"row":391,"column":45},"action":"insert","lines":[" "]},{"start":{"row":393,"column":0},"end":{"row":393,"column":4},"action":"remove","lines":["    "]},{"start":{"row":395,"column":0},"end":{"row":395,"column":4},"action":"remove","lines":["    "]},{"start":{"row":396,"column":0},"end":{"row":396,"column":1},"action":"remove","lines":[" "]},{"start":{"row":396,"column":4},"end":{"row":396,"column":7},"action":"remove","lines":["   "]},{"start":{"row":397,"column":0},"end":{"row":397,"column":2},"action":"remove","lines":["  "]},{"start":{"row":397,"column":4},"end":{"row":397,"column":6},"action":"remove","lines":["  "]},{"start":{"row":398,"column":0},"end":{"row":398,"column":4},"action":"remove","lines":["    "]},{"start":{"row":399,"column":4},"end":{"row":399,"column":8},"action":"remove","lines":["    "]},{"start":{"row":400,"column":0},"end":{"row":400,"column":1},"action":"remove","lines":[" "]},{"start":{"row":400,"column":4},"end":{"row":400,"column":7},"action":"remove","lines":["   "]},{"start":{"row":401,"column":0},"end":{"row":401,"column":3},"action":"remove","lines":["   "]},{"start":{"row":401,"column":4},"end":{"row":401,"column":5},"action":"remove","lines":[" "]},{"start":{"row":402,"column":0},"end":{"row":402,"column":4},"action":"remove","lines":["    "]},{"start":{"row":423,"column":2},"end":{"row":424,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":390,"column":1},"end":{"row":391,"column":0},"action":"insert","lines":["",""],"id":1820},{"start":{"row":391,"column":0},"end":{"row":392,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":392,"column":0},"end":{"row":392,"column":50},"action":"insert","lines":["function show_country_data2(error, countriesData2)"],"id":1821}],[{"start":{"row":392,"column":50},"end":{"row":393,"column":0},"action":"insert","lines":["",""],"id":1822}],[{"start":{"row":393,"column":0},"end":{"row":394,"column":0},"action":"insert","lines":["    var ndx = crossfilter(countriesData2);",""],"id":1823}],[{"start":{"row":393,"column":0},"end":{"row":393,"column":4},"action":"remove","lines":["    "],"id":1824}],[{"start":{"row":393,"column":38},"end":{"row":394,"column":0},"action":"remove","lines":["",""],"id":1825}],[{"start":{"row":392,"column":50},"end":{"row":392,"column":51},"action":"insert","lines":["{"],"id":1826}],[{"start":{"row":406,"column":0},"end":{"row":406,"column":1},"action":"insert","lines":["}"],"id":1827}],[{"start":{"row":406,"column":1},"end":{"row":407,"column":0},"action":"insert","lines":["",""],"id":1828},{"start":{"row":407,"column":0},"end":{"row":408,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":392,"column":50},"end":{"row":392,"column":51},"action":"insert","lines":[" "],"id":1829},{"start":{"row":393,"column":0},"end":{"row":393,"column":4},"action":"insert","lines":["    "]},{"start":{"row":394,"column":0},"end":{"row":394,"column":4},"action":"insert","lines":["    "]},{"start":{"row":395,"column":0},"end":{"row":395,"column":4},"action":"insert","lines":["    "]},{"start":{"row":396,"column":0},"end":{"row":396,"column":4},"action":"insert","lines":["    "]},{"start":{"row":398,"column":0},"end":{"row":398,"column":4},"action":"insert","lines":["    "]},{"start":{"row":399,"column":0},"end":{"row":399,"column":4},"action":"insert","lines":["    "]},{"start":{"row":400,"column":4},"end":{"row":400,"column":8},"action":"insert","lines":["    "]},{"start":{"row":401,"column":0},"end":{"row":401,"column":2},"action":"insert","lines":["  "]},{"start":{"row":401,"column":6},"end":{"row":401,"column":8},"action":"insert","lines":["  "]},{"start":{"row":402,"column":0},"end":{"row":402,"column":4},"action":"insert","lines":["    "]},{"start":{"row":403,"column":4},"end":{"row":403,"column":8},"action":"insert","lines":["    "]},{"start":{"row":404,"column":0},"end":{"row":404,"column":2},"action":"insert","lines":["  "]},{"start":{"row":404,"column":6},"end":{"row":404,"column":8},"action":"insert","lines":["  "]},{"start":{"row":405,"column":0},"end":{"row":405,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":394,"column":87},"end":{"row":394,"column":115},"action":"remove","lines":[" d.totalMaleUnemploymentRate"],"id":1830}],[{"start":{"row":394,"column":86},"end":{"row":394,"column":87},"action":"remove","lines":[","],"id":1831}],[{"start":{"row":395,"column":62},"end":{"row":395,"column":63},"action":"insert","lines":["."],"id":1832},{"start":{"row":395,"column":63},"end":{"row":395,"column":64},"action":"insert","lines":["r"]},{"start":{"row":395,"column":64},"end":{"row":395,"column":65},"action":"insert","lines":["e"]},{"start":{"row":395,"column":65},"end":{"row":395,"column":66},"action":"insert","lines":["d"]},{"start":{"row":395,"column":66},"end":{"row":395,"column":67},"action":"insert","lines":["u"]},{"start":{"row":395,"column":67},"end":{"row":395,"column":68},"action":"insert","lines":["c"]}],[{"start":{"row":395,"column":63},"end":{"row":395,"column":68},"action":"remove","lines":["reduc"],"id":1833},{"start":{"row":395,"column":63},"end":{"row":395,"column":72},"action":"insert","lines":["reduceSum"]}],[{"start":{"row":395,"column":72},"end":{"row":395,"column":129},"action":"insert","lines":["(function(d) { return [d.totalFemaleUnemploymentRate] });"],"id":1834}],[{"start":{"row":395,"column":104},"end":{"row":395,"column":105},"action":"remove","lines":["m"],"id":1835},{"start":{"row":395,"column":103},"end":{"row":395,"column":104},"action":"remove","lines":["e"]},{"start":{"row":395,"column":102},"end":{"row":395,"column":103},"action":"remove","lines":["F"]}],[{"start":{"row":395,"column":102},"end":{"row":395,"column":103},"action":"insert","lines":["M"],"id":1836}],[{"start":{"row":395,"column":86},"end":{"row":395,"column":95},"action":"remove","lines":[" return ["],"id":1837}],[{"start":{"row":395,"column":114},"end":{"row":395,"column":115},"action":"remove","lines":[" "],"id":1838},{"start":{"row":395,"column":113},"end":{"row":395,"column":114},"action":"remove","lines":["]"]}],[{"start":{"row":394,"column":86},"end":{"row":394,"column":88},"action":"remove","lines":["] "],"id":1839}],[{"start":{"row":394,"column":56},"end":{"row":394,"column":57},"action":"remove","lines":["["],"id":1840},{"start":{"row":394,"column":55},"end":{"row":394,"column":56},"action":"remove","lines":[" "]},{"start":{"row":394,"column":54},"end":{"row":394,"column":55},"action":"remove","lines":["n"]},{"start":{"row":394,"column":53},"end":{"row":394,"column":54},"action":"remove","lines":["r"]},{"start":{"row":394,"column":52},"end":{"row":394,"column":53},"action":"remove","lines":["u"]},{"start":{"row":394,"column":51},"end":{"row":394,"column":52},"action":"remove","lines":["t"]},{"start":{"row":394,"column":50},"end":{"row":394,"column":51},"action":"remove","lines":["e"]},{"start":{"row":394,"column":49},"end":{"row":394,"column":50},"action":"remove","lines":["r"]}],[{"start":{"row":395,"column":115},"end":{"row":395,"column":116},"action":"remove","lines":[";"],"id":1841}],[{"start":{"row":395,"column":67},"end":{"row":395,"column":115},"action":"remove","lines":["ceSum(function(d) {d.totalMaleUnemploymentRate})"],"id":1842},{"start":{"row":395,"column":66},"end":{"row":395,"column":67},"action":"remove","lines":["u"]},{"start":{"row":395,"column":65},"end":{"row":395,"column":66},"action":"remove","lines":["d"]},{"start":{"row":395,"column":64},"end":{"row":395,"column":65},"action":"remove","lines":["e"]},{"start":{"row":395,"column":63},"end":{"row":395,"column":64},"action":"remove","lines":["r"]},{"start":{"row":395,"column":62},"end":{"row":395,"column":63},"action":"remove","lines":["."]}],[{"start":{"row":394,"column":34},"end":{"row":394,"column":80},"action":"remove","lines":["(function(d) { d.totalFemaleUnemploymentRate})"],"id":1843},{"start":{"row":394,"column":34},"end":{"row":394,"column":112},"action":"insert","lines":["({ \"totalFemaleUnemploymentRate\": 460.4, \"totalMaleUnemploymentRate\": 317.46 }"]}],[{"start":{"row":394,"column":112},"end":{"row":394,"column":113},"action":"insert","lines":[")"],"id":1844}],[{"start":{"row":394,"column":35},"end":{"row":394,"column":46},"action":"insert","lines":["function(d)"],"id":1847}],[{"start":{"row":394,"column":46},"end":{"row":394,"column":47},"action":"insert","lines":[" "],"id":1848}],[{"start":{"row":394,"column":21},"end":{"row":394,"column":126},"action":"remove","lines":["ndx.dimension(function(d) { \"totalFemaleUnemploymentRate\": 460.4, \"totalMaleUnemploymentRate\": 317.46 });"],"id":1849},{"start":{"row":394,"column":21},"end":{"row":394,"column":117},"action":"insert","lines":["ndx.dimension(function(d) {return [d.totalFemaleUnemploymentRate, d.totalMaleUnemploymentRate] }"]}],[{"start":{"row":394,"column":117},"end":{"row":394,"column":118},"action":"insert","lines":[")"],"id":1850},{"start":{"row":394,"column":118},"end":{"row":394,"column":119},"action":"insert","lines":[";"]}],[{"start":{"row":13,"column":30},"end":{"row":13,"column":44},"action":"remove","lines":["countriesData2"],"id":1851},{"start":{"row":13,"column":30},"end":{"row":13,"column":44},"action":"insert","lines":["countriesData2"]}],[{"start":{"row":9,"column":45},"end":{"row":9,"column":59},"action":"remove","lines":["countriesData2"],"id":1852},{"start":{"row":9,"column":45},"end":{"row":9,"column":59},"action":"insert","lines":["countriesData2"]}],[{"start":{"row":409,"column":48},"end":{"row":409,"column":49},"action":"remove","lines":["2"],"id":1853}],[{"start":{"row":409,"column":48},"end":{"row":409,"column":49},"action":"insert","lines":["3"],"id":1854}],[{"start":{"row":409,"column":26},"end":{"row":409,"column":27},"action":"remove","lines":["2"],"id":1855}],[{"start":{"row":409,"column":26},"end":{"row":409,"column":27},"action":"insert","lines":["3"],"id":1856}],[{"start":{"row":411,"column":39},"end":{"row":411,"column":40},"action":"remove","lines":["2"],"id":1857}],[{"start":{"row":411,"column":39},"end":{"row":411,"column":40},"action":"insert","lines":["3"],"id":1858}],[{"start":{"row":408,"column":0},"end":{"row":408,"column":2},"action":"remove","lines":["/*"],"id":1859}],[{"start":{"row":428,"column":0},"end":{"row":428,"column":2},"action":"remove","lines":["*/"],"id":1860}],[{"start":{"row":13,"column":46},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":1862},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":4},"end":{"row":15,"column":0},"action":"insert","lines":["    show_country_data2(error, countriesData2);",""],"id":1863}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"remove","lines":["    "],"id":1864},{"start":{"row":396,"column":48},"end":{"row":396,"column":49},"action":"insert","lines":[" "]},{"start":{"row":430,"column":0},"end":{"row":431,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":59},"end":{"row":9,"column":60},"action":"insert","lines":[","],"id":1865}],[{"start":{"row":9,"column":60},"end":{"row":9,"column":61},"action":"insert","lines":[" "],"id":1866}],[{"start":{"row":9,"column":61},"end":{"row":9,"column":75},"action":"insert","lines":["countriesData2"],"id":1867}],[{"start":{"row":9,"column":74},"end":{"row":9,"column":75},"action":"remove","lines":["2"],"id":1868}],[{"start":{"row":9,"column":74},"end":{"row":9,"column":75},"action":"insert","lines":["3"],"id":1869}],[{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"remove","lines":["2"],"id":1870}],[{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":["3"],"id":1871}],[{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"remove","lines":["2"],"id":1872}],[{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":["3"],"id":1873}],[{"start":{"row":390,"column":0},"end":{"row":391,"column":0},"action":"remove","lines":["",""],"id":1874},{"start":{"row":389,"column":0},"end":{"row":390,"column":0},"action":"remove","lines":["",""]},{"start":{"row":388,"column":0},"end":{"row":389,"column":0},"action":"remove","lines":["",""]},{"start":{"row":387,"column":0},"end":{"row":388,"column":0},"action":"remove","lines":["",""]},{"start":{"row":386,"column":18},"end":{"row":387,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":386,"column":18},"end":{"row":387,"column":0},"action":"insert","lines":["",""],"id":1875},{"start":{"row":387,"column":0},"end":{"row":387,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":387,"column":8},"end":{"row":388,"column":0},"action":"insert","lines":["",""],"id":1876},{"start":{"row":388,"column":0},"end":{"row":388,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":405,"column":1},"end":{"row":405,"column":2},"action":"insert","lines":["*"],"id":1877},{"start":{"row":405,"column":2},"end":{"row":405,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":390,"column":0},"end":{"row":390,"column":1},"action":"insert","lines":["/"],"id":1878},{"start":{"row":390,"column":1},"end":{"row":390,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["/"],"id":1879},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":9,"column":44},"end":{"row":9,"column":60},"action":"remove","lines":[" countriesData2,"],"id":1881}],[{"start":{"row":390,"column":1},"end":{"row":390,"column":2},"action":"remove","lines":["*"],"id":1882},{"start":{"row":390,"column":0},"end":{"row":390,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":405,"column":2},"end":{"row":405,"column":3},"action":"remove","lines":["/"],"id":1883},{"start":{"row":405,"column":1},"end":{"row":405,"column":2},"action":"remove","lines":["*"]}]]},"ace":{"folds":[],"scrolltop":6094,"scrollleft":0,"selection":{"start":{"row":392,"column":42},"end":{"row":392,"column":42},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1563462300365,"hash":"9a82baa60312d237cee236d5f5d8899e347b6e09"}