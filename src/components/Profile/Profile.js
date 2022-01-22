import React, { useEffect } from "react";
import norman from "./images/norman.jpeg";
import "./Profile.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Profile() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="profile">
      <h1 className="judul">PRAKTISI DAN PORTFOLIO TIM</h1>
      <div className="teams">
        <div data-aos="fade-up-right" className="team">
          <div className="atas">
            <img className="img-two" src={norman} alt="norman" />
            <div className="details">
              <h3>Muhamad Normansyah, S.H. - MANAGING PARTNER</h3>
              <p>
                Dengan menyandang gelar sarjana hukum dari Universitas Padjadjaran dan mengambil gelar master hukum bisnis di Universitas Indonesia, hal tersebut memberikan pemahaman yang sangat mendalam terhadap teori dan praktik hukum
                serta implementasinya di lapangan sehingga dapat dipercaya untuk menangani berbagai proyek-proyek besar diantaranya proyek kerjasama antara PT MNC Land Tbk. dengan The Trump Organization, penyelesaian perkara ketenagakerjaan
                PT Perusahaan Gas Negara dan penyusunan kajian hukum proyek Light Rail Transit Pemerintah Kota Bandung.
              </p>
            </div>
          </div>
          <ul>
            <li>
              Asistensi terhadap PT MNC Land Tbk dalam pengurusan aspek legal dalam kerjasama pengadaan Taman Hiburan Lido Resort antara dengan The Trump Organization, kerjasama pengadaan proyek Infrastruktur real estate, mengevaluasi
              bisnis atas sengketa tanah, dokumentasi, Leasing, desain mekanik, proyek kelistrikan dan perpipaan;
            </li>
            <li>
              Asistensi terhadap PT Nodeflux Teknologi Indonesia dalam mempersiapkan term of services atas produk perusahaan, strategi pemasaran, instrumen distribusi, product pricing, product system topology, product disclaimer, product
              privacy policy, go to market strategy, perolehan Hak Kekayaan Intelektual, pendirian asosiasi, serta membangun hubungan dengan pihak pemerintahan
            </li>
            <li>Asistensi terhadap lembaga keuangan bank dan non-bank dalam melakukan kerjasama perolehan hak akses data dari Direktorat Jenderal Kependudukan dan Pencatatan Sipil Republik Indonesia (DUKCAPIL);</li>
            <li>Kajian hukum tata ruang dan peraturan perundang-undangan dalam penerapan Light Rail Transit Pemerintah Kota Bandung.</li>
            <li>Kajian hukum tata ruang dan peraturan perundang-undangan dalam penerapan Microcell Pole Pemerintah Kota Bandung.</li>
            <li>
              Asistensi terhadap PT Permata Karya Jasa (“Anak Perusahaan PGN”) dalam manajemen risiko perusahaan, perizinan dan kepatuhan hukum, legalitas perusahaan, perselisihan ketenagakerjaan serta penyelesaian perkara tindak pidana.
            </li>
            <li>Asistensi terhadap PT Perusahaan Pelayaran Bhaita dalam penyelesaian perkara PKPU</li>
            <li>Asistensi terhadap PT FWD Life Indonesia dalam penyelesaian perkara poaching dan twisting agen asuransi.</li>
            <li>Asistensi PT AXA Mandiri Financial Services dalam penyelesaian perkara asuransi nasabah terhadap legalitas transaksi telemarketing.</li>
            <li>Asistensi terhadap PT Pertamina Patra Niaga dalam penyelesaian perkara Penundaan Kewajiban Pembayaran Utang.</li>
            <li>Asistensi PT Perusahaan Gas Negara dalam penyelesaian perkara ketenagakerjaan dengan pegawai outsourcing.</li>
            <li>Asistensi dalam pengurusan perizinan perbankan dalam memperoleh izin menerbitkan kartu debit dan kredit</li>
          </ul>
        </div>
        <div data-aos="fade-up-left" className="team">
          <div className="atas">
            <img className="img-two" src={norman} alt="norman" />
            <div className="details">
              <h3>Tania Irwan, S.H. - PARTNER</h3>
              <p>
                Dengan mengawali karir sebagai pengacara di salah satu kantor hukum ternama serta dipercaya untuk menjadi konsultan hukum di perusahaan bertaraf internasional, memberikan Tania pemahaman yang luas terhadap praktik korporasi
                lokal dan asing. Dengan berbagai variasi pekerjaan yang dijalani, memberikan dia kecakapan di berbagai bidang yang diantaranya meliputi pengurusan perusahaan asing, pengurusan Hak Kekayaan Intelektual, korupsi, pencucian
                uang, perkapalan hingga pengurusan pendirian perusahaan rintisan.
              </p>
            </div>
          </div>
          <ul>
            <li>Uji tuntas perizinan dan kepemilikan aset dan asistensi dalam pengurusan penyelesaian pembayaran biaya carter kapal pada PT Momentum Indonesia Investama</li>
            <li>Asistensi dalam pengurusan perkara korporasi pertanggungjawaban freight forwarder atas tenggelamnya kapal LCT Ayu</li>
            <li>Asistensi dalam pengurusan perkara perdata atas tanah PT Modernland Realty Tbk</li>
            <li>Asistensi dalam pengurusan aspek legal dalam pendirian PMA dan pengurusan perizinan PT Indomobi Aplikasi Teknologi</li>
            <li>Asistensi dalam pendampingan pendaftaran Hak Kekayaan Intelektual Mr DIY</li>
            <li>Asistensi dalam pendampingan pemeriksaan saksi dugaan tindak pidana korupsi dan pencucian uang PERUM Damri</li>
            <li>Asistensi dalam pendampingan pemeriksaan saksi dugaan tindak pidana korupsi dan pencucian uang Waskita Karya</li>
            <li>Asistensi dalam pendampingan laporan dugaan tindak pidana penipuan dan/atau penggelapan PT Sinarmas Global Mandiri</li>
            <li>Asistensi dalam pendampingan pemeriksaan saksi dugaan tindak pidana korupsi dan pencucian uang dalam pengadaan Bus BRT</li>
            <li>Asistensi dalam pemeriksaan dugaan tindak pidana lingkungan hidup terkait izin dan penyimpanan Limbah B3</li>
            <li>Asistensi dalam pemeriksaan saksi dugaan pelanggaran Overload Overdimensi pada Dinas Perhubungan</li>
            <li>Asistensi dalam perkara korporasi terkait gugatan ganti kerugian yang diakibatkan penggelapan oleh kepala cabang Bank Tabungan Negara</li>
            <li>Uji tuntas aspek hukum dalam pengadaan kendaraan oleh PT Pindad Persero</li>
            <li>
              Asistensi terhadap perusahaan rintisan di bidang Financial Technology dalam mempersiapkan terms and condition, privacy policy, perizinan, perolehan Hak Kekayaan Intelektual, serta membangun hubungan dengan pihak Asosiasi
            </li>
            <li>Asistensi dalam pengurusan perjanjian dan sistem kerjasama perusahaan Financial Technology dengan pialang berjangka terdaftar di Bappepti</li>
            <li>Asistensi terhadap kepatuhan Dana Pensiun terkait laporan aktuaris kepada Otoritas Jasa Keuangan.</li>
          </ul>
        </div>
      </div>

      <div className="teams">
        <div data-aos="fade-up-right" className="team">
          <div className="atas">
            <img className="img-two" src={norman} alt="norman" />
            <div className="details">
              <h3>Lahiwadifra, S.H. - PARTNER</h3>
              <p>
                Lahiwadifra adalah seorang kurator handal yang telah berpengalaman menangani dan menyelesaikan puluhan perkara PKPU dan Kepailitan di Indonesia, Pengetahuannya yang luas tentang hukum Kepailitan dari segi teori dan praktik
                membuatnya menjadi seorang ahli yang mampu menangani setiap tugas dengan sempurna. Tidak dapat diragukan lagi bahwa lahiwadifra adalah seorang pengacara yang terampil, cerdas dan pekerja keras serta memiliki konsistensi
                dalam menjaga kualitas pekerjaannya bahkan pada saat menangani klien terberat sekalipun dengan mudahnya.
              </p>
            </div>
          </div>
          <ul>
            <li>Berlaku sebagai Kurator dalam perkara kepailitan dari PT Aspalindo Sejahtera Mandiri</li>
            <li>Berlaku sebagai Kurator dalam penyelesaian perkara kepailitan dari PT Nusuno Karya</li>
            <li>Berlaku sebagai Kurator dalam penyelesaian perkara kepailitan dari PT Meriana Khoe</li>
            <li>Asistensi selaku konsultan hukum dalam perkara Penundaan Kewajiban Pembayaran Utang dan Kepailitan PT Bank Mutiara Tbk.</li>
            <li>Asistensi terhadap PT Atlas Resource Tbk GROUP dalam perkara Penundaan Kewajiban Pembayaran Utang dan Kepailitan.</li>
            <li>Asistensi terhadap PT Bumi Sejahtera Ariya dalam perkara Penundaan Kewajiban Pembayaran Utang dan Kepailitan.</li>
            <li>Asistensi terhadap PT Jtrust Investment dalam perkara Kepailitan PT Suharli Malaya Lestari</li>
            <li>
              Berlaku sebagai Pemohon Intervensi atas perkara The Hongkong and Shanghai Banking Corporation, Kementerian Keuangan RI Cq Direktorat Jenderal Kekayaan Negara Kementerian Keuangan RI Cq Kantor Wilayah DJKN Provinsi Dki Jakarta
              Cq Kantor Pelayanan Kekayaan Negara Dan Lelang Jakarta, PT. Balai Mandiri Prasarana (Balai Lelang Mandiri), Kementerian Agraria Dan Tata Ruang/Badan Pertanahan Nasional RI Cq Kantor Wilayah Badan Pertanahan Nasional Provinsi
              DKI Jakarta Cq Kantor Pertanahan Kota Administratif Jakarta Selatan
            </li>
            <li>Asistensi Asistensi dalam pengurusan perkara asuransi PT Axa Mandiri Financial Services</li>
            <li>Asistensi dalam penyelesaian perkara praktik poaching dan twisting pada perusahaan asuransi.</li>
          </ul>
        </div>
        <div data-aos="fade-up-left" className="team">
          <div className="atas">
            <img className="img-two" src={norman} alt="norman" />
            <div className="details">
              <h3>Matheace Ramaputra,S.H. - PARTNER</h3>
              <p>
                Matheace mengawali karir hukumnya di salah satu kantor advokat, dan di usia 25 tahun dia telah dipercaya untuk menjadi co-leader dalam salah satu proyek pembangkit listrik berskala nasional. Lalu Matheace melanjutkan karir
                di kantor advokat tertua di Indonesia untuk beberapa proyek di bidang merger & akuisisi, infrastruktur, dan perhutanan. Pada tahun 2018, Matheace tergabung sebagai konsultan di beberapa perusahaan start-up dan memimpin
                beberapa proyek fundraising dan Strategi Nasional Kecerdasan Buatan, serta terlibat di beberapa proyek pemerintah seperti National Capital Integrated Coastal Defense, LRT Jakarta Initiatives, Ibu Kota Baru.
              </p>
            </div>
          </div>
          <ul>
            <li>Fundraising Bridge Round USD 2,5 Juta Dollar mewakili Kata.ai, memimpin proyek dalam drafting, advising, dan negosiasi dengan pihak Venture Capital TPTF.</li>
            <li>Memimpin proyek pendanaan untuk 10 Film Indonesia yang mewakili Venture Capital Ideosources.</li>
            <li>Memimpin proyek app-to-app agreement dengan mewakili Migo dengan perusahaan multinasional untuk sharing content film dan series di aplikasi SVOD (Subscription Video On Demand).</li>
            <li>Memimpin Fundraising Series B bagi startup Kata.ai, termasuk dalam drafting dan negosiasi dengan pihak Venture Capital TPTF, MDI, dan Artha Prima Financel.</li>
            <li>Asistensi dalam proyek akuisisi perusahaan yang dilakukan oleh Baramulti Group yang bergerak di bidang pengelolaan hutan produksi.</li>
            <li>Asistensi dalam kajian hukum untuk PT. PLN (Persero) dan uji tuntas dalam 34 proyek pembangkit listrik yang bermasalah.</li>
            <li>Asistensi dengan Bappenas dalam proyek kajian hukum penataan dan perencanaan reklamasi Teluk Jakarta</li>
            <li>Asistensi Bappenas dalam pembuatan undang-undang Ibu Kota Negara Republik Indonesia</li>
            <li>Asistensi dengan Pemprov DKI Jakarta dalam kajian hukum proyek LRT Jakarta.</li>
            <li>Asistensi PT. Archi Indonesia dalam persiapan kepatuhan hukum bagi perusahaan tambang dalam rencana melaksanakan IPO.</li>
            <li>Asistensi PT. PLN (Persero) dalam proyek pembangkit listrik kapal (vessel power plant)</li>
            <li>Memimpin proyek pendanaan Financing Arrangement senilai USD 10 juta Dollar untuk perusahaan tambang batu bara PT. Dua Bersaudara</li>
            <li>Asistensi PT. HP Indonesia dalam proses klaim di Singapore International Arbitration Centre (SIAC) dalam kasus chip delivery agreement.</li>
            <li>Asistensi BPPT terhadap Strategi Nasional Kecerdasan Artifisial.</li>
            <li>Memimpin proyek pendanaan Migo dalam Series C dengan MNC Group</li>
            <li>Asistensi BOP Labuan Bajo dalam kajian hukum dan contractual arrangement dalam proyek mega wisata Mandalika Moto GP.</li>
            <li>Asistensi kajian hukum, risiko, dan contractual arrangement untuk Perumda Pembangunan Sarana Jaya dalam proyek ITF penugasan Proyek Strategis Nasional DKI Jakarta.</li>
          </ul>
        </div>
      </div>

      <div className="teams">
        <div data-aos="fade-up-right" className="team">
          <div className="atas">
            <img className="img-two" src={norman} alt="norman" />
            <div className="details">
              <h3>Alif Alatas, S.H. - PARTNER</h3>
              <p>
                Alif mengawali karir di dunia hukum sebagai litigator di salah satu Lembaga Bantuan Hukum ternama yang memiliki pengalaman yang luar biasa dalam penyelesaian perkara-perkara litigasi non komersial atau secara pro bono,
                pencapaian penanganan rata-rata 50 kasus dalam satu bulan. Alif memiliki pengalaman dan pengetahuan yang luar biasa dalam menyelesaikan banyak perkara litigasi baik dalam ranah pidana, Perselisihan Hubungan Industrial,
                Perceraian, perdata komersial, dan tata usaha negara, Pengurusan Transportasi, Ekspor/Impor, Pergudangan, penanaman modal Dalam Negeri/PMA, pendirian perusahaan, serta perizinan usaha.
              </p>
            </div>
          </div>
          <ul>
            <li>Asistensi terhadap calon DPD RI Provinsi Banten dalam penanganan mediasi di KPU, perkara gugatan Pemilu di Pengadilan Tata Usaha Negara atas adanya dugaan kecurangan dalam pemilihan umum.</li>
            <li>Asistensi dalam perancangan kajian hukum terhadap Pemerintah Daerah Serang bekerjasama dengan Dinas Pekerjaan Umum Serang, dan Perguruan Tinggi sehubungan dengan perencanaan aturan tata kelola Dinas Lingkungan Hidup.</li>
            <li>
              Asistensi terhadap PT. Nissin Transport Indonesia dalam pengurusan pidana kasus penggelapan dalam jabatan, penipuan penyelesaian perkara tindak pidana dan perkara perdata komersial, termasuk namun tidak terbatas pada Proses
              Hukum di Kepolisian, Kejaksaan dan Pengadilan, Somasi dan gugatan dalam proses hukum Perdata serta penanganan aspek kepatuhan hukum, manajemen risiko perusahaan, perizinan, legalitas perusahaan, perselisihan ketenagakerjaan,
              pengurusan Izin TKA.
            </li>
            <li>Asistensi terhadap PT. Nissin Jaya Indonesia dalam pengurusan kasus hubungan industrial dari buruh dan pengusaha</li>
            <li>
              Asistensi terhadap PT. APM Hyundai Transys dalam melakukan upaya hukum kepada salah satu karyawan yang melakukan tindak sewenang2 dalam jabatan yang melakukan perjanjian dengan pihak Vendor tanpa diketahui oleh pihak Direktur
              dan Komisaris.
            </li>
            <li>Asistensi terhadap Buruh melawan berbagai perusahaan menghadapi berbagai kasus dalam mengajukan gugatan kepada Pengadilan Hubungan Industrial.</li>
            <li>
              Asistensi terhadap PT. Muia Niaga Prima dan PT. Mulia Jasa Prima dalam memberikan konsultasi pada proyek Konstruksi kepada pemerintah, konsultan dalam pengurusan izin dalam proyek, beserta aspek hukum yang harus ditaati dalam
              pelaksanaan proyek tersebut
            </li>
            <li>
              Asistensi dalam pendirian perusahaan di bidang industri seperti dalam bidang Manufacture, Otomotif, outsourcing, konstruksi, ATK, ekspor/impor, pergudangan, Jasa Pengurusan Transportasi baik perizinan perusahaan dalam negeri
              maupun perusahaan asing.
            </li>
            <li>Asistensi dalam pemberian nasihat hukum terhadap perusahaan pada perkara penggelapan dan penipuan, utang piutang, ketenagakerjaan, perizinan umum dan khusus dan lain sebagainya.</li>
            <li>Asistensi dalam memberikan layanan mediasi, negosiasi dan rekonsiliasi terhadap perkara ketenagakerjaan, sengketa pertanahan, tindak pidana umum/khusus, dan sebagainya.</li>
            <li>Asistensi dalam menangani perkara perceraian, gono-gini, hak asuh anak, penetapan, sengketa waris, dan sebagainya.</li>
          </ul>
        </div>
        <div data-aos="fade-up-left" className="team">
          <div className="atas">
            <img className="img-two" src={norman} alt="norman" />
            <div className="details">
              <h3>Bryand Ery Sianipar, S.H. - PARTNER</h3>
              <p>
                Bryand mengawali karirnya sebagai litigator di salah satu kantor hukum litigasi di Jakarta yang memiliki jaringan dan pengalaman yang luas dalam penyelesaian perkara-perkara litigasi di Indonesia, sehingga memberikan Bryand
                pengalaman dan pengetahuan yang luar biasa dalam menyelesaikan banyak perkara litigasi dalam ranah Perdata komersial dan ranah Pidana sehingga memberikan ia kecakapan di berbagai bidang yang diantaranya meliputi bidang hukum
                penanaman modal, pertanahan, penundaan pembayaran kewajiban utang, kepailitan dan bidang corporate litigasi lainnya.
              </p>
            </div>
          </div>
          <ul>
            <li>Asistensi terhadap PT. Graha Multi Pangan dalam perkara gugatan Wanprestasi di Pengadilan Negeri.</li>
            <li>Asistensi terhadap PT. Putra Mandiri Jembar dalam melakukan Initial Public Offering (IPO) menjadi PT. Putra Mandiri Jembar Tbk.</li>
            <li>Asistensi terhadap PT. Logomas Utama dalam memberikan konsultasi pada proyek Tambang Pasir Laut.</li>
            <li>Asistensi terhadap Afiliasi PT Perusahaan Gas Negara Tbk. dalam manajemen risiko perusahaan, perizinan dan kepatuhan hukum, legalitas perusahaan, perselisihan ketenagakerjaan serta penyelesaian perkara tindak pidana.</li>
            <li>Asistensi terhadap PT. Putra Mandiri Jembar Tbk. untuk mendampingi dan/atau Mewakili Perusahaan dalam Proses Hukum di Kepolisian, Kejaksaan dan Pengadilan, Memberikan opini-opini hukum terhadap isu Perusahaan</li>
            <li>Asistensi terhadap PT. Dipo Internasional Pahala Otomotif dalam aksi korporasi Merger Perusahaan.</li>
            <li>Asistensi terhadap PT. Sinar Mandiri Logistik dalam penanganan penyelesaian perkara wanprestasi.</li>
            <li>
              Asistensi terhadap DIPO Group (PT. Dipo Internasional Pahala Otomotif, PT. Dipo Angkasa Motor, PT. Mokas Otomotif Sejahtera) dalam menangani aspek kepatuhan, manajemen risiko perusahaan, perizinan dan kepatuhan hukum,
              legalitas perusahaan, perselisihan ketenagakerjaan serta penyelesaian perkara tindak pidana dan perkara perdata komersial, termasuk namun tidak terbatas pada Proses Hukum di Kepolisian, Kejaksaan dan Pengadilan.
            </li>
          </ul>
        </div>
      </div>

      <h1 className="judul">REKANAN AHLI & PENASIHAT</h1>
      <div className="teams-two">
        <img className="img-three" src={norman} alt="norman" />
        <div className="details-two">
          <h3>Herbert Nababan, S.T., S.H., M.H. - SENIOR ADVISOR</h3>
          <p>
            Herbert mengawali karirnya di KPK sebagai Fungsional Spesialis Pencegahan Korupsi pada Kedeputian Pencegahan selama 5 tahun pertama serta telah banyak berkecimpung dalam program-program pencegahan korupsi pada instansi-instansi
            baik instansi pemerintah (Kementerian/Lembaga dan BUMN/BUMD) maupun instansi Swasta berupa program pendidikan antikorupsi, pengadaan barang dan jasa, gratifikasi dan suap, Laporan Harta Penyelenggara Negara (LHKPN), Compliance
            Handling, Tindak Pidana Pencucian Uang, Tindak Pidana Korporasi, dll. REKANAN AHLI & PENASIHAT Selanjutnya Herbert pernah menjabat sebagai Spesialis Kerjasama Nasional KPK yang banyak menangani Kerjasama (MoU) antara KPK dengan
            lembaga-lembaga baik instansi pemerintah maupun swasta dalam negeri maupun luar negeri sehubungan dengan upaya pemberantasan korupsi di Indonesia.10 tahun terakhir (2011-2021), Herbert Nababan dipromosikan sebagai Penyidik KPK
            yang telah banyak memiliki jaringan dan pengalaman yang luas dalam penyelidikan dan penyidikan perkara-perkara tindak pidana korupsi, tindak pidana pencucian uang serta tindak pidana korporasi di Indonesia yang melibatkan unsur
            eksekutif, legislatif dan yudikatif, sehingga memberikan Herbert Nababan pengalaman dan pengetahuan yang luar biasa dalam menyelesaikan banyak perkara korupsi, tindak pidana suap, gratifikasi, korupsi dalam pengadaan barang dan
            jasa, korupsi dalam proyek pertambangan, kehutanan dan sumber daya alam, konflik kepentingan, tindak pidana pencucian uang, tindak pidana korporasi, hingga akhirnya menjabat sebagai Penyidik Senior (senior investigator) KPK dan
            sebagai pelaksana tugas kepala satuan tugas penyidikan KPK.
          </p>
        </div>
        <ul data-aos="fade-right" className="ul-two">
          <li>Big Data Analytic untuk Audit Internal, The Institute of Internal Auditors Indonesia (IIA) - Agustus 2020 — Agustus 2020</li>
          <li>Akuntansi Forensik (Basic & Advance), Komisi Pemberantasan Korupsi (KPK) dan Ernst & Young - Oktober 2019 — November 2019</li>
          <li>Peningkatan Kapasitas Penyidik Anti Korupsi, Korean International Cooperation Agency (KOICA), Korea Selatan - Agustus 2017 — September 2017</li>
          <li>Pelatihan Investigasi, Corrupt Practices Investigation Bureau (CPIB), Singapura - Agustus 2014 — Desember 2014</li>
          <li>Pertemuan Tahunan Asia Pacific Group ke-15 2012 Brisbane, Australia, Asian Pacific Group on Money Laundering (APG) - Juli 2012</li>
          <li>Konferensi Negara Pihak Konvensi Perserikatan Bangsa-Bangsa Menentang Korupsi, Wina, Austria, Perserikatan Bangsa-Bangsa (PBB) - Mei 2011 — Juni 2011</li>
          <li>Lokakarya Analisis Tingkat Lanjut Regional, Jaringan Penegakan Kejahatan Keuangan, Wina, Virginia, AS - Maret 2011 — April 2011</li>
          <li>Pelatihan Regional untuk Focal Point dan Pakar Pemerintah yang berpartisipasi dalam Mekanisme Tinjauan untuk Perserikatan Bangsa-Bangsa Melawan Korupsi, United Nations Office on Drugs and Crime (UNODC) - Oktober 2010</li>
          <li>Lokakarya Tipologi Asia Pacific Group, Dhaka, Bangladesh, Diselenggarakan oleh Grup Asia Pasifik tentang Pencucian Uang - Oktober 2010</li>
          <li>Fundamentals of Wealth Management (WM01), Program Sertifikasi Wealth Management, Jakarta - November 2009</li>
          <li>Pertemuan Tahunan Asia Pacific Group ke-12 2009, Brisbane, Australia, Grup Asia Pasifik tentang Pencucian Uang - Juli 2009</li>
          <li>Lokakarya Peningkatan Kapasitas Pemberantasan Korupsi Terkait Pencucian Uang, Bangkok, Thailand, APEC - Agustus 2007</li>
          <li>Pelatihan Pelacakan Aset, Pemulihan dan Pemulangan, Jakarta, Pusat Internasional untuk Pemulihan Aset dan GTZ - September 2007</li>
          <li>Pertemuan Tahunan Asia Pacific Group ke-10 2007, Perth, Australia, Grup Asia Pasifik tentang Pencucian Uang - Juli 2007</li>
          <li>Workshop Tipologi APG & Pertemuan Pleno Khusus APG, Asia Pacific Group (APG) - November 2006</li>
        </ul>
      </div>

      <div className="teams-two">
        <img className="img-three" src={norman} alt="norman" />
        <div className="details-two">
          <h3>Altira Imanuel Prasetyo, S.H. - SENIOR ADVISOR</h3>
          <p>
            Altira mendapatkan gelar sarjana hukum dari Fakultas Hukum Universitas Padjadjaran. Altira mengawali karir didunia hukum dengan bekerja pada satu kantor advokat di Jakarta yang berfokus kepada penanganan perkara-perkara di
            bidang pertanahan baik di pulau jawa maupun diluar pulau jawa. Setelah itu Altira kemudian pindah kesalahsatu lawfirm dijakarta yang memiliki klien-klien asing dan bekerja pada cooperate and labor section dimana pada divisi ini
            dikhususkan untuk menangani dan memberikan nasihat maupun penanganan hukum terhadap client khususnya di bidang ketenagakerjaan serta memberikan nasihat hukum terkait pendirian perusahaan dan penjalanan perusahaan. Altira juga
            merupakan seorang Pengurus dan Kurator.
          </p>
        </div>
        <ul data-aos="fade-right" className="ul-two">
          <li>Asistensi perkara ketenagakerjaan di PHI terhadap beberapa perusahaan asal Jepang di Indonesia</li>
          <li>Asistensi terhadap pembuatan Peraturan Perusahaan serta Peraturan Kerja Bersama terhadap beberapa perusahaan Jepang di Indonesia</li>
          <li>Asistensi terhadap pembuatan skema bisnis salah satu perusahaan asing di Indonesia</li>
          <li>Asistensi terhadap salah satu perusahaan manufaktur di Indonesia dengan memberi opini-opini hukum terhadap produk yang akan mereka keluarkan</li>
          <li>Asistensi terhadap salah satu perusahaan Financing dalam hal restrukturisasi hutang</li>
          <li>Bekerja sama dengan salah satu Perusahaan Financing dengan memberikan seminar mengenai berbagai jenis hukum jaminan di Indonesia</li>
          <li>Asistensi terhadap direktur salah satu perusahaan air mineral di Sumatera Selatan dalam permasalahan ultra vires</li>
          <li>Asistensi terhadap karyawan dan direktur perusahaan air mineral di Sumatera Selatan dalam kasus hukum di Kepolisian dan Kejaksaan</li>
          <li>Asistensi terhadap Rapat Umum Pemegang Saham (RUPS) pada beberapa perusahaan di Indonesia</li>
          <li>Asistensi terhadap pengajuan judicial review terhadap hak waris terhadap anak dari pasangan kawin campur</li>
        </ul>
      </div>

      <div className="teams-two">
        <img className="img-three" src={norman} alt="norman" />
        <div className="details-two">
          <h3>Ray Baskoro, S.H. - SENIOR ASSOCIATE</h3>
          <p>
            Setelah berhasil memperoleh gelar Sarjana Hukum dari Universitas Indonesia, mengawali karirnya di kantor hukum terbesar di Jakarta yang memiliki afiliasi dan jaringan global pada divisi litigasi (dispute resolution) dan telah
            banyak berinteraksi dengan klien-klien mancanegara. Ray memiliki pengalaman dalam berlitigasi dalam ranah perdata, tata usaha negara, hubungan industrial dan arbitrase, serta mendalami ekspertis bidang hukum ketenagakerjaan,
            merger dan akuisisi perusahaan, informasi teknologi, jasa keuangan non-bank, hukum perdagangan, pendirian dan perolehan perizinan perusahaan.
          </p>
        </div>
        <ul data-aos="fade-right" className="ul-two">
          <li>Uji tuntas kode produk yang dipasarkan di Indonesia oleh PT Decathlon Sports Indonesia;</li>
          <li>Asistensi untuk memenuhi kepatuhan terhadap peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas pada, perizinan dan tindakan-tindakan korporasi, kepada PT Decathlon Sports Indonesia;</li>
          <li>Uji tuntas terhadap perusahaan tambang nikel yang berlokasi pada Provinsi Maluku Utara dalam rangka akuisisi oleh perusahaan asal Tiongkok</li>
          <li>Uji tuntas terhadap perusahaan tambang panas bumi yang berlokasi di Provinsi Nusa Tenggara Timur dalam rangka akuisisi oleh perusahaan asal Tiongkok;</li>
          <li>Asistensi perolehan izin tenaga kerja asing PT Eisai Indonesia;</li>
          <li>Asistensi perolehan izin Penyelenggara Sertifikat Elektronik serta izin-izin terkait untuk melakukan kegiatan usaha di Indonesia bagi PT Amazon Web Service Indonesia;</li>
          <li>Asistensi uji tuntas terhadap salah satu sekolah internasional di Indonesia dalam rangka akuisisi tanah yang dilakukan oleh Perusahaan Modal Asing di Indonesia;</li>
          <li>Uji tuntas terhadap bidang-bidang tanah yang berlokasi di Pasar Kemis, Provinsi Banten, seluas 26.000 Ha dalam rangka akuisisi tanah yang dilakukan oleh PT CFLD Indonesia;</li>
          <li>
            Asistensi perolehan sertifikat hak guna bangunan terhadap bidang-bidang tanah dengan total luas sebesar 48.000 Meter persegi yang berlokasi di Kabupaten Lombok Timur, Nusa Tenggara Barat, yang dilakukan oleh Perusahaan Modal
            Asing yang bergerak di bidang perhotelan;
          </li>
          <li>Penanganan perkara perdata antara PT Alam Bukit Tigapuluh (anak perusahaan dari Yayasan WWF Indonesia) melawan direkturnya, sehubungan dengan pemecatan dirinya sebagai direktur PT Alam Bukit Tigapuluh</li>
          <li>Asistensi perolehan izin kerja dari Tenaga Kerja Asing;</li>
          <li>Uji tuntas terhadap PT Bank BTPN Tbk, sehubungan dengan penerbitan obligasi dengan skema Penawaran Umum Berkelanjutan;</li>
          <li>Asistensi dalam melakukan penyusunan kontrak kerja bagi Perusahaan Multinasional yang ada di Indonesia;</li>
          <li>Asistensi untuk kepatuhan dalam perlindungan data pribadi bagi beberapa perusahaan-perusahaan di Indonesia;</li>
        </ul>
      </div>

      <div className="teams-two">
        <img className="img-three" src={norman} alt="norman" />
        <div className="details-two">
          <h3>Mega Carerra, S.H. - SENIOR ASSOCIATE</h3>
          <p>
            Mega mengawali karir sebagai legal professional sebagai associate lawyer di beberapa firma hukum di Indonesia. Lalu, setelah hampir 3 tahun bekerja di firma hukum, Mega memutuskan untuk mengembangkan kemampuannya sebagai legal
            professional dengan menjadi in-house counsel di perusahaan startup yang bergerak di bidang financial technology. Mega juga aktif menjadi freelance legal consultant untuk beberapa perusahaan startup yang bergerak di bidang
            e-commerce, healthtech, dan insurtech.
          </p>
        </div>
        <ul data-aos="fade-right" className="ul-two">
          <li>Asistensi pelaksanaan bisnis operasional beberapa perusahaan peer to peer lending di Indonesia</li>
          <li>Asistensi pelaksanaan bisnis operasional perusahaan penyelenggara sertifikat elektronik di Indonesia</li>
          <li>Asistensi pelaksanaan beberapa penawaran umum berkelanjutan atas surat utang beberapa perusahaan lokal terbuka dan tertutup di Indonesia</li>
          <li>Asistensi uji tuntas pelaksanaan restrukturisasi perusahaan milik negara yang bergerak di bidang perkebunan</li>
          <li>Asistensi pelaksanaan bisnis operasional perusahaan penyedia jasa di bidang teknologi finansial untuk pelaksanaan open API di Indonesia</li>
          <li>Asistensi uji tuntas pelaksanaan pinjaman kepada salah satu perusahaan media penyiaran</li>
          <li>Asistensi penyusunan code of conduct sehubungan dengan perlindungan data pribadi konsumen untuk salah satu asosiasi perusahaan di Indonesia</li>
          <li>Asistensi pelaksanaan bisnis operasional untuk perusahaan yang bergerak di bidang health-tech dan insurtech</li>
          <li>Asistensi uji tuntas pelaksanaan transaksi akuisisi perusahaan terbuka yang bergerak di bidang perdagangan distribusi bahan bangunan</li>
          <li>Asistensi notifikasi pasca transaksi akuisisi kepada Komisi Pengawasan Persaingan Usaha untuk beberapa perusahaan lokal dan asing</li>
          <li>Asistensi penanganan perkara persaingan usaha untuk perusahaan yang bergerak di bidang FMCG - produk air mineral dalam kemasan</li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
