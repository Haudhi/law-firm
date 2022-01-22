import React, { useEffect } from "react";
import "./Services.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="services">
      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Infrastruktur & Pembiayaan Proyek</h1>
          <p>
            Keadaan ekonomi di Indonesia yang memiliki perkembangan pesat telah berhasil mengundang ketertarikan investor-investor asing untuk menyelenggarakan proyek infrastruktur di Indonesia, sebagai contoh, jalan tol dan moda
            transportasi massal seperti Mass Rapid Transportation. Praktisi hukum kami dapat memberikan asistensi serta mempersiapkan setiap dokumen transaksional yang dibutuhkan seperti perjanjian fasilitas pinjaman pembiayaan proyek,
            perjanjian gadai, perjanjian kerja sama Pemerintah dan Badan Usaha. Selain itu, dengan berbekal pemahaman dan praktik hukum yang ekstensif di berbagai lini kegiatan usaha, kami dapat memberikan asistensi di berbagai jenis proyek
            seperti transportasi, pembangkit listrik, dan jalan tol.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Merger & Akuisisi</h1>
          <p>
            Praktisi hukum kami berpengalaman dalam memberikan asistensi bagi perusahaan-perusahaan baik domestik, multinasional, maupun asing yang memiliki reputasi yang tinggi, dalam mempersiapkan segala bentuk dokumentasi maupun
            tindakan-tindakan yang diperlukan dalam transaksi merger & akuisisi. Selain pemberian nasehat hukum, adapun jenis-jenis dokumen yang dapat kami berikan adalah, antara lain, perjanjian pemegang saham, perjanjian gadai saham,
            daftar pemegang saham, dan perjanjian jual beli saham bersyarat, serta dokumen-dokumen esensial lainnya.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>PKPU & Kepailitan</h1>
          <p>
            Kesuma Partners menyediakan asistensi baik bagi perorangan maupun perusahaan dalam menyelesaikan permasalahan utang piutang yang mungkin tertunda atau belum dilaksanakan sama sekali oleh Debitur dengan cara mengajukan permohonan
            Penundaan Kewajiban Pembayaran Utang (PKPU) ataupun untuk mengajukan permohonan Pailit terhadap Debitur ke pengadilan Niaga agar dapat melindungi kepentingan klien-klien kami, karena kami sangat memahami bahwa pelaksanaan
            pembayaran merupakan hal yang sangat vital bagi klien-klien kami dalam menjalankan kegiatan usahanya.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Investasi</h1>
          <p>
            Dengan pengalaman yang ekstensif dan variatif, praktisi hukum telah memiliki kompetensi yang sangat baik dalam melakukan asistensi kepada klien untuk melakukan kegiatan-kegiatan usaha dan investasi di Indonesia. Adapun, kami
            dapat memberikan asistensi dalam bentuk termasuk namun tidak terbatas pada, pendirian perseroan terbatas asing maupun modal dalam negeri serta bentuk badan usaha lainnya, perolehan izin usaha dan izin-izin terkait lainnya,dan
            memberikan nasihat terkait komposisi pemegang saham perseroan terbatas sesuai dengan peraturan yang berlaku di Indonesia
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Teknologi</h1>
          <p>
            Para praktisi hukum Kesuma Partners sangat berpengalaman dalam melakukan asistensi kepada perusahaan-perusahaan yang melakukan kegiatan usaha di bidang teknologi di Indonesia, khususnya dalam penyediaan dokumen-dokumen untuk
            memenuhi kelengkapan produk ataupun dalam bertransaksi. Dokumen-dokumen yang kami sediakan diantaranya meliputi perancangan perjanjian berlangganan, syarat dan ketentuan produk, end user license agreement (EULA), kebijakan
            privasi, kebijakan cookies, kebijakan keamanan, kebijakan pengelolaan data, batasan tanggung jawab layanan, perjanjian lisensi produk, ketentuan pemeliharaan produk, perjanjian uji coba produk, perjanjian sandboxing, perjanjian
            integrasi produk, perjanjian riset dan pengembangan, service level agreement (SLA).
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Restrukturisasi Utang dan Insolvensi</h1>
          <p>
            Utang-piutang adalah salah satu kegiatan yang umum dilakukan oleh perusahaan dan merupakan hal yang sangat berdampak pada laju bisnis perusahaan. Oleh karenanya, praktisi hukum kami menyediakan asistensi atas kegiatan hukum yang
            berkaitan dengan restrukturisasi utang dan insolvensi. Adapun asistensi dan tindakan-tindakan yang dimaksud adalah termasuk namun tidak terbatas pada, melakukan negosiasi penyelesaian utang, membuat perjanjian restrukturisasi
            utang, membuat perjanjian perdamaian, perjanjian pengalihan utang ataupun perjanjian penghapusan utang.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Keuangan & Perbankan</h1>
          <p>
            Praktisi hukum kami berpengalaman dalam memberikan asistensi klien yang ingin memasuki pasar perbankan, pembiayaan dan asuransi di Indonesia dengan memberikan nasihat tentang semua aspek hukum dalam pendirian dan pengoperasian
            lembaga keuangan perbankan maupun non-bank di indonesia. Kami mampu memberikan asistensi dalam membuat perjanjian pinjaman dan dokumen jaminan untuk lembaga keuangan, baik di dalam maupun di luar indonesia, serta membantu
            investor untuk mendirikan dan mengoperasikan reksa dana dan program pensiun. Kami juga berfungsi sebagai penasihat dalam pemberi pinjaman asing pada pembiayaan proyek dan transaksi pinjaman komersial sindikasi dan
            restrukturisasi utang perusahaan
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Perkapalan</h1>
          <p>
            Bidang usaha perkapalan memiliki keunikan tersendiri, baik dari segi lisensi, jenis perjanjian, otoritas terkait, serta jenis kasus yang terjadi. Oleh karenanya, diperlukan pengalaman dan pemahaman yang komprehensif atas praktik
            dan implementasi peraturan perundangan-perundangan terkait perkapalan yang ada di Indonesia. Praktisi hukum kami telah memiliki pengalaman, dalam uji tuntas perizinan perusahaan di bidang perkapalan serta dalam penyelesaian
            sengketa baik dari pihak pemilik kapal, pemilik barang, hingga pengangkut (freight forwarder). Kami juga menyiapkan perjanjian pengangkutan atau perjanjian time charter bagi klien kami. Selain itu kami juga memiliki pengetahuan
            khusus terkait sisi komersial dari bisnis perkapalan.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Perolehan Hak Akses Dukcapil</h1>
          <p>
            Dalam bidang usaha tertentu, proses pengenalan nasabah atau Know Your Customer (“KYC”) untuk mencegah adanya penipuan dan tindak pidana lainnya, khususnya di kegiatan usaha terkait penyelenggaraan jasa keuangan perbankan maupun
            non-bank. Salah satu upaya konkrit untuk mengimplementasikan KYC adalah melakukan pengumpulan data pribadi dari setiap nasabah. Pada akhir tahun 2019, Direktorat Jenderal Kependudukan dan Catatan Sipil Republik Indonesia
            menerbitkan peraturan yang memperbolehkan institusi maupun badan usaha dengan bidang usaha apapun untuk memperoleh hak akses data kependudukan Indonesia dengan persyaratan tertentu. Praktisi Hukum kami telah berhasil memberikan
            asistensi kepada klien-klien kami dalam memperoleh hak akses tersebut
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Asuransi</h1>
          <p>
            Praktisi Hukum kami telah berpengalaman dalam membantu investor untuk baik membangun usaha bidang perasuransian maupun menjaga kepatuhan pada peraturan penyelenggaraan perasuransian di Indonesia yang membutuhkan pengalaman dalam
            menilai keunikan setiap kasus serta membantu pemenuhan perizinan yang dibutuhkan. Selain itu, kami juga dapat memberikan asistensi yang dibutuhkan dalam operasional suatu perusahaan perasuransian, yakni antara lain, menyediakan
            template perjanjian, penyusunan skema bisnis operasional, pendirian cabang, serta pendampingan litigasi terkait penyelesaian kasus dengan agen atau nasabah.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Oil & Gas</h1>
          <p>
            Para praktisi Kesuma Partners telah banyak terlibat dalam berbagai transaksi eksplorasi dan eksploitasi migas, antara lain Perjanjian Kerja Sama Operasi, Kontrak Produksi, Perjanjian Teknis, Pengadaan Tanah, Perjanjian Rig
            Pengeboran, Perjanjian Produk dan Jasa, dan masih banyak lagi Perjanjian lainnya. Kami juga menjaga hubungan kami dengan regulator terkait serta perusahaan-perusahaan yang bergerak di industri yang sama agar kami dapat selalu
            ter-informasi mengenai perubahan-perubahan atas peraturan perundang-undangan dan peraturan-peraturan di sektor minyak dan gas
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Persaingan Usaha</h1>
          <p>
            Dengan berbekal pengalaman di berbagai perusahaan multinasional, Praktisi Hukum Kesuma Partners telah memiliki pengalaman di bidang persaingan usaha tidak sehat. Pengalaman para pengacara Kesuma Partners termasuk dan tidak
            terbatas pada penilaian resiko pelanggaran, pendampingan pemeriksaan dugaan pelanggaran (sejak tahap investigasi hingga peradilan), asistensi kepatuhan pelaporan kepada Komisi Persaingan Usaha Tidak Sehat dan sebagainya. Pada
            layanan pencegahan, Kesuma Partners akan mempelajari project business development klien dan memberikan penilaian resiko serta memberikan nasihat hukum agar tidak terjadi pelanggaran.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Perpajakan</h1>
          <p>
            Praktisi Kesuma Partners selalu berusaha untuk memberikan kinerja terbaik kepada klien kami dengan melakukan penelitian mendalam untuk menemukan pendekatan pajak yang paling ramah untuk diterapkan di semua jenis transaksi,
            dengan mengandalkan pengetahuan kami yang luas tentang peraturan perundang-undangan dan kebijakan pajak saat ini, serta dengan memanfaatkan hubungan baik kami secara profesional dengan Direktorat Jenderal Pajak
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Ketenagakerjaan</h1>
          <p>
            Para praktisi hukum kami telah menuntaskan puluhan perkara ketenagakerjaan di berbagai perusahaan di berbagai sektor industri. Tim kami akan membantu anda baik dalam perancangan dokumen-dokumen yang diantaranya penyediaan
            Perjanjian Kerja Waktu Tertentu, Perjanjian Kerja Waktu Tidak Tertentu, Perjanjian Jasa Tenaga Ahli, Perjanjian Perbantuan, Perancangan Peraturan Perusahaan, Perolehan izin kerja Tenaga Kerja Asing, Perancangan Perjanjian Kerja
            Bersama, Perancangan Kode Etik Karyawan, serta maupun mewakili anda selaku kuasa hukum dalam penyelesaian perselisihan hak karyawan, penyelesaian perselisihan kepentingan karyawan, ataupun pemutusan hubungan kerja.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Penyediaan Dokumen Transaksi Umum</h1>
          <p>
            Kami telah banyak membantu perusahaan-perusahaan di Indonesia dengan cara menyediakan layanan dalam bentuk perancangan dokumen-dokumen komersial bagi klien-klien kami dalam menjalankan serta menunjang kegiatan usahanya yang
            antara lain meliputi penyediaan perjanjian kerja sama umum dan khusus, perjanjian jual beli, perjanjian pemasaran, perjanjian distributor/ distribusi, perjanjian reseller/pengecer, nota kesepahaman, perjanjian berlangganan,
            perjanjian sewa, perjanjian gadai, perjanjian fidusia, perjanjian lisensi, syarat & ketentuan, perjanjian agen, perjanjian waralaba dan lain sebagainya.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Kepatuhan & Manajemen Resiko</h1>
          <p>
            Kami menyediakan layanan dalam bentuk uji tuntas atas kepatuhan perusahaan dalam menjalankan kegiatan usahanya berdasarkan peraturan perundang-undangan ataupun atas aturan dari otoritas terkait, untuk kemudian kami dapat
            memberikan serangkaian rekomendasi-rekomendasi yang dapat dijadikan acuan bagi perusahaan. Dan tidak hanya itu, kami juga dapat membantu klien kami untuk menganalisa sertifikasi-sertifikasi yang diperlukan serta membantu klien
            dalam perolehannya.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Izin Tenaga Kerja Asing</h1>
          <p>
            Penggunaan tenaga kerja asing pada badan hukum di Indonesia merupakan salah satu bentuk konkrit dalam melakukan alih teknologi dan alih pengetahuan dalam operasional maupun mengembangkan kegiatan usahanya. Selain itu,
            keterbatasan kompetensi sumber daya juga menjadi dasar utama untuk merekrut tenaga kerja Asing. Praktisi hukum kami telah memiliki pengalaman dalam melakukan pengurusan izin tenaga kerja Asing maupun izin tinggal tenaga kerja
            asing, antara lain ITAS dan ITAP serta dokumen terkait lainnya sehubungan dengan keberadaan warga negara asing yang berada di Indonesia.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Sertifikasi Produk</h1>
          <p>
            Selain perizinan usaha, terdapat sertifikasi-sertifikasi lain yang wajib diperoleh sebelum menyediakan layanan dan/atau produk oleh pelaku usaha kepada konsumennya maupun sebagai penunjang kualitas dari layanan dan/atau produk
            miliknya. Praktisi hukum kami memiliki pengalaman untuk memperoleh sertifikasi pada layanan dan/atau produk yang beragam sehingga dapat memberikan asistensi anda dalam perolehan sertifikat-sertifikat tersebut. Adapun,
            sertifikat-sertifikat dimaksud adalah, antara lain sebagai berikut: ISO 37001, OHSAS, SNI, Izin Edar, sertifikat Halal MUI, Ahli K3, SIUPMSE, PSE, BPOM, dan POSTEL.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Real Estate</h1>
          <p>
            Kami memahami bahwa pentingnya kejelasan atas kepemilikan aset berupa tanah dan/atau bangunan serta bentuk properti lainnya merupakan hal yang sangat vital dalam melakukan kegiatan usaha. Praktisi hukum kami telah banyak
            terlibat dalam melakukan asistensi terkait dengan real estat, anta lain, melakukan uji tuntas terhadap bidang-bidang tanah dengan luas ribuan hektar, perjanjian sewa menyewa dan/atau jual beli properti, memberikan nasihat
            terkait skema kepemilikan properti bagi pihak asing di Indonesia, serta pengakuisisian tanah dan/atau bangunan.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Pendirian dan Pengurusan Perusahaan</h1>
          <p>
            Kesuma Partners telah banyak memberikan asistensi kepada beragam perusahaan dalam mendirikan perusahaan, pengurusan izin perusahaan, pengurusan sertifikasi perusahaan, pendirian cabang perusahaan, pendirian anak perusahaan,
            perubahan struktur perusahaan, rapat umum pemegang saham tahunan dan rapat umum pemegang saham luar biasa. Serta menyediakan rancangan dokumen kebutuhan perusahaan seperti perjanjian para pendiri perusahaan, perjanjian para
            pemegang saham, perjanjian keterlibatan saham, perjanjian operasi gabungan, perjanjian perusahaan patungan, dan lain sebagainya.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Hak Kekayaan Intelektual</h1>
          <p>
            Praktisi hukum kami sangat menyadari pentingnya perlindungan Hak Kekayaan Intelektual (“HAKI”) dalam melakukan kegiatan usaha di Indonesia. Oleh karena itu, kami dapat membantu klien-klien kami dengan memberikan nasihat serta
            melakukan tindakan yang diperlukan untuk melindungi HAKI, antara lain, asistensi pendaftaran Hak Cipta, Hak Merek, Hak Paten, Desain Industri, desain tata letak ruang, perlindungan varietas tanaman, pembuatan perjanjian lisensi
            penggunaan Merek serta logo, dan perjanjian waralaba (franchise)
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Arbitrase dan Penyelesaian Sengketa</h1>
          <p>
            Sifat penyelesaian perkara di Pengadilan umumnya bersifat terbuka untuk umum sehingga memungkinkan adanya publisitas informasi yang bersifat confidential. Oleh karena itu seringkali Para Pihak di dalam suatu perjanjian komersial
            memilih penyelesaian sengketa melalui Badan Arbitrase. Praktisi hukum kami telah berpengalaman dalam mendampingi penyelesaian sengketa melalui Badan Arbitrase di Indonesia. Selain itu kami juga melayani penyelesaian sengketa
            diluar pengadilan seperti melakukan negosiasi, konsolidasi dan mediasi yang menghasilkan solusi penyelesaian yang menguntungkan.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Healthcare</h1>
          <p>
            Kegiatan usaha di bidang kesehatan semakin berkembang di Indonesia. Kegiatan usaha dalam sektor kesehatan juga kian berkembang seperti penyedia aplikasi sistem informasi manajemen rumah sakit dan layanan aplikasi kesehatan yang
            mendukung perkembangan bisnis bagi perusahaan yang bergerak di bidang kesehatan. Praktisi hukum kami memiliki pengalaman dalam memberikan nasihat hukum, pengurusan lisensi, pembuatan aplikasi hingga perlindungan data. Selain itu
            kami juga berpengalaman dalam melakukan uji tuntas perizinan terkait lingkungan hidup bagi klinik dan rumah sakit di Indonesia.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Penyediaan Tenaga Perbantuan</h1>
          <p>
            Kesuma Partners menyediakan layanan dalam bentuk penyediaan tenaga perbantuan di bidang hukum (of counsel legal) untuk dapat ditempatkan di perusahaan anda dalam periode waktu tertentu berdasarkan kesepakatan. Tentunya tenaga
            perbantuan yang kami sediakan adalah orangorang terpilih yang telah mengikuti serangkaian pelatihanpelatihan dari kami secara terus menerus, sehingga ia dapat berkontribusi secara maksimal saat bekerja di perusahaan anda, serta
            mampu untuk mencapai ekspektasi perusahaan anda.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Korupsi</h1>
          <p>
            Pada perkara Tindak Pidana Korupsi tim kami akan membantu anda baik dalam pendampingan di tingkat Kepolisian, Kejaksaan, KPK dan melakukan pembelaan di tingkat pengadilan pidana tipikor baik berupa mengajukan penangguhan
            penahanan, eksepsi dakwaan, mengumpulkan alat bukti, mengajukan saksi ahli dan saksi yang meringankan, mengajukan nota pembelaan (Pledoi) dan melakukan upaya hukum lain nya baik berupa banding, kasasi maupun Peninjauan Kembali
            (PK) di berbagai tingkat Pengadilan.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Narkotika dan Obat-obatan Terlarang</h1>
          <p>
            Kami sangat memahami bahwa dalam praktiknya masih banyaknya kasus dimana kepolisian maupun kejaksaan melakukan kesalahan dalam menerapkan pasal dalam tuntutan yang membuat kekeliruan dalam hukum yang mana bisa membuat terpidana
            salah dalam vonis hukuman oleh Pengadilan. Para praktisi kami telah menuntaskan puluhan perkara dalam bidang Narkotika dan Obat Psikotropika baik tersangka atau diduga tersangka dalam melakukan pendampingan di tingkat Kepolisian
            dan Pembelaan di tingkat pengadilan baik dalam kasus klien yang menyalahgunakan, menyimpan maupun menjual/memproduksi dengan melakukan upaya hukum yang sesuai dengan UU Narkotika.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Pembunuhan</h1>
          <p>
            Para praktisi hukum kami telah menuntaskan berbagai perkara dalam bidang Pembunuhan dengan melakukan pendampingan di kepolisian dan pembelaan di tingkat pengadilan untuk memperjelas kronologi yang disangkakan karena di dalam
            kasus pembunuhan adanya unsur kesengajaan dan tidak sengaja atau membela diri yang di mana itu bisa mempengaruhi vonis dalam pertimbangan hakim dalam menjatuhkan hukuman berdasarkan terbuktinya niat pelaku, terbuktinya
            perbuatan, kebenaran dan kelengkapan dari alat bukti serta kesaksian dari para saksi yang dapat dipertanggungjawabkan.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Penggelapan dan Penipuan</h1>
          <p>
            Para praktisi hukum kami telah menuntaskan berbagai perkara dalam bidang Penggelapan dan Penipuan baik dari Pihak Korban atau yang dirugikan untuk membuat laporan di Kepolisian, Asistensi sampai dalam tahap Pelimpahan Kejaksaan,
            Persidangan sampai dengan Putusan Inkrah, selain itu kami juga dapat berdiri di pihak tersangka atau diduga tersangka dalam melakukan mediasi untuk di selesaikan di luar pengadilan, mengajukan restorative justice dan/atau
            pendampingan di tingkat Kepolisian serta Pembelaan di tingkat Pengadilan, karena tugas kami yaitu membela berdasarkan hak - hak dari tersangka memperjelas apa yang dituntut, dan menguak di dalam fakta persidangan apakah klien
            tersebut melakukan secara dipaksa, diancam, atau dilakukan secara bersama-sama yang mana pada praktiknya masih banyaknya dalam kejahatan penggelapan dan penipuan yang dilakukan secara berkelompok sehingga terhindar dari
            terjadinya kesalahan dalam penetapan tersangka.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Pencucian Uang</h1>
          <p>
            Para praktisi hukum kami telah menuntaskan berbagai perkara dalam bidang Pencucian Uang baik dari sisi Korban, Tersangka atau diduga tersangka dalam melakukan pendampingan di tingkat Kepolisian dan Pembelaan di tingkat
            pengadilan, karena tugas kami membela klien berdasarkan hak - hak klien, memperjelas apa yang disangkakan, dan menguak di dalam fakta persidangan apakah klien tersebut memang terdakwa atau hanyalah korban dari kejahatan
            Perusahaan/kelompok mana pada praktiknya masih banyaknya dalam kejahatan pencucian uang yang dilakukan secara berkelompok tetapi hanya satu orang yang diadili dalam arti lain dijadikan tumbal juga salah orang dalam penetapan
            tersangka karena adanya situasi dan kondisi yang menyebabkan klien tersebut ditetapkan menjadi tersangka.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Tindak Pidana Korporasi</h1>
          <p>
            TIndak Pidana Korporasi adalah kejahatan-kejahatan perusahaan yang dilakukan oleh pengusaha ataupun karyawan di dalam suatu perusahaan atau dalam berbagai perusahaan. seperti melakukan tindakan Fraud, penyalahgunaan wewenang,
            penggelapan dalam jabatan, menyalahgunakan fasilitas dan sebagainya sehingga merugikan masyarakat, seperti iklan yang menyesatkan, pencemaran lingkungan, eksploitasi terhadap kaum pekerja/ buruh, manipulasi restitusi pajak,
            manipulasi dana masyarakat, sehingga Praktisi hukum kami dapat membantu anda dalam menangani berbagai perkara tindak pidana korporasi untuk membela hak hak klien sebagaimana yang diatur oleh Undang-Undang yang berlaku.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Pencabulan dan Asusila</h1>
          <p>
            Para praktisi hukum kami telah menuntaskan berbagai perkara dalam bidang pencabulan dan asusila baik tersangka atau diduga tersangka dalam melakukan pendampingan di tingkat Kepolisian dan Pembelaan di tingkat pengadilan, karena
            tugas kami membela klien berdasarkan hak - hak klien, memperjelas apa yang disangkakan, dan menguak di dalam fakta persidangan apakah klien tersebut memang terdakwa atau hanyalah korban dari kejahatan orang luar yang membuat dia
            terpaksa melakukan kejahatan tersebut, menemukan fakta hukum baru dalam pembelaan kepada hakim dalam menetapkan putusan / vonis terhadap klien
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Cybercrime</h1>
          <p>
            Kejahatan Cybercrime adalah segala aktivitas ilegal yang digunakan oleh pelaku kejahatan dengan menggunakan teknologi sistem informasi jaringan komputer yang secara langsung menyerang teknologi sistem informasi dari korban.
            Namun secara lebih luas kejahatan cyber bisa juga diartikan sebagai segala tindak ilegal yang didukung dengan teknologi komputer. Praktisi hukum kami telah menuntaskan berbagai perkara cybercrime baik terkait UU ITE, dan segala
            bentuk kejahatan yang dilakukan melalui teknologi.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Sengketa Pemilu</h1>
          <p>
            Sengketa Pemilu adalah sengketa yg terjadi antar Peserta Pemilu & sengketa Peserta Pemilu dengan Penyelenggara Pemilu sebagai akibat dikeluarkannya keputusan KPU, KPU Provinsi, KPU Kab/Kota. Praktisi Hukum kami telah
            berpengalaman dalam mengajukan perkara sengketa proses pemilu dan sengketa hasil pemilu apabila Dalam hal terjadi sengketa hasil pemilu, maka lembaga yang berwenang menyelesaikannya adalah Mahkamah Konstitusi (MK). Tetapi, untuk
            sengketa proses pemilu, lembaga yang berwenang untuk menerima, memeriksa, dan memutus penyelesaian sengketa proses tersebut adalah Badan Pengawas Pemilu (Bawaslu) dan Pengadilan Tata Usaha Negara (PTUN). Pengajuan gugatan atas
            sengketa proses pemilu ke PTUN dilakukan setelah upaya administrasi di Bawaslu telah digunakan.
          </p>
        </div>
      </div>

      <div className="line">
        <div data-aos="fade-right" className="two">
          <h1>Pencemaran Nama Baik dan Perbuatan Tidak Menyenangkan</h1>
          <p>
            Perlu dipahami bahwa terdapat perbedaan antara pencemaran nama baik dan perbuatan tidak menyenangkan. Ini karena masyarakat terkadang tidak menyadari bahwa kedua tindakan tersebut memiliki landasan hukum berbeda. Para praktisi
            hukum kami telah berpengalaman dalam menangani kasus Pencemaran Nama Baik dan Perbuatan Tidak Menyenangkan baik dari pihak korban maupun pihak yang diduga tersangka karena di mata hukum perbedaan antara pencemaran nama baik dan
            perbuatan tidak menyenangkan menentukan berat atau tidaknya hukuman dilayangkan.
          </p>
        </div>
        <div data-aos="fade-up" className="two">
          <h1>Tindak Pidana Dibawah Umur</h1>
          <p>
            Para praktisi kami menangani perkara Tindak Pidana di bawah umur yaitu mencakup anak yang umurnya dibawah usia 18 tahun dengan pengklasifikasian menurut undang-undang yang harus memperhatikan kepentingan anak, akan tetapi selain
            dalam membela pelaku tindak pidana yang dilakukan dibawah umur para praktisi hukum kami juga menangani dari pihak korban yang mana pada praktiknya masih banyaknya korban dari hasil tindak pidana yaitu anak di bawah umur seperti
            pencabulan, asusila dsb.
          </p>
        </div>
        <div data-aos="fade-left" className="two">
          <h1>Sengketa Tanah dan Pembebasan Lahan</h1>
          <p>
            Sengketa tanah atau yang biasa dikatakan sengketa adalah perselisihan pertanahan antara orang perseorangan, badan hukum, atau lembaga yang tidak berdampak luas secara sosio-politis sedangkan pembebasan lahan adalah pencabutan
            hak atas kepemilikan tanah oleh pemerintah secara paksa yang dimiliki pihak lain untuk penyelenggaraan kepentingan umum. Para Praktisi Hukum kami sudah berpengalaman dan profesional dalam menangani perkara tersebut yang tentunya
            menimbang akan kebenaran, kekuatan dokumen dan kemenangan kasus yang kita berikan dengan advice terbaik kepada Klien.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
