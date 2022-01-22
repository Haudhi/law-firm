import React, { useEffect } from "react";
import "./About.css";
import "aos/dist/aos.css";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="about">
      <div id="about">
        <div className="text">
          <div data-aos="fade-down" className="kesuma">
            <h1>Kesuma Partners</h1>
            <p>Counselors at Law</p>
          </div>
          <img
            data-aos="zoom-in"
            className="img-one"
            src="https://images.unsplash.com/photo-1580968376246-a361acdaf27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img-about"
          />
        </div>
        <div data-aos="fade-right" className="ringkasan">
          <h1>RINGKASAN EKSEKUTIF</h1>
          <p>
            Seiring dengan bertumbuh dan berkembangnya keadaan sosial, ekonomi, politik dan teknologi di Indonesia yang kompleks dan penuh dengan dinamika seringkali menimbulkan permasalahan hukum yang beragam sehingga menimbulkan tingginya
            tuntutan untuk tersedianya layanan profesional asistensi hukum yang berkualitas dan mampu berkomitmen untuk memberikan pelayanan terbaik. Kantor hukum Kesuma Partners hadir untuk menawarkan anda solusi dalam memecahkan setiap
            permasalahan hukum yang anda alami dengan dedikasi yang kuat serta pendirian yang kokoh bahwa setiap klien kami sangatlah berharga untuk diperjuangkan, oleh karenanya kami selalu menempatkan setiap klien kami sebagai prioritas
            utama. Kami sangat menyadari bahwa pelayanan hukum yang baik tidak dapat diwujudkan dengan hanya memiliki pemahaman di bidang hukum saja, oleh karenanya, Kesuma Partners beranggotakan para praktisi hukum yang memiliki pemahaman,
            pengalaman dan kompetensi secara menyeluruh dan mendalam akan praktik di dunia bisnis, komersial, teknologi, serta hal-hal esensial lainnya yang menjadi pertimbangan utama bagi para pelaku usaha di berbagai sektor industri,
            terutama sehubungan dengan aktivitas-aktivitas bisnis dalam menjalankan dan mengamankan kegiatan usaha dari klien kami. Sehingga klien kami dapat merasakan dampak yang signifikan baik dari segi pengelolaan perusahaan yang baik
            (good corporate governance) ataupun terbantu dari segi pengambilan keputusan yang tepat demi menunjang kesuksesannya
          </p>
        </div>

        <div data-aos="fade-left" className="nilai">
          <h1>NILAI UTAMA</h1>
          <p>
            Seiring dengan bertumbuh dan berkembangnya keadaan sosial, ekonomi, politik dan teknologi di Indonesia yang kompleks dan penuh dengan dinamika seringkali menimbulkan permasalahan hukum yang beragam sehingga menimbulkan tingginya
            tuntutan untuk tersedianya layanan profesional asistensi hukum yang berkualitas dan mampu berkomitmen untuk memberikan pelayanan terbaik. Kantor hukum Kesuma Partners hadir untuk menawarkan anda solusi dalam memecahkan setiap
            permasalahan hukum yang anda alami dengan dedikasi yang kuat serta pendirian yang kokoh bahwa setiap klien kami sangatlah berharga untuk diperjuangkan, oleh karenanya kami selalu menempatkan setiap klien kami sebagai prioritas
            utama. Kami sangat menyadari bahwa pelayanan hukum yang baik tidak dapat diwujudkan dengan hanya memiliki pemahaman di bidang hukum saja, oleh karenanya, Kesuma Partners beranggotakan para praktisi hukum yang memiliki pemahaman,
            pengalaman dan kompetensi secara menyeluruh dan mendalam akan praktik di dunia bisnis, komersial, teknologi, serta hal-hal esensial lainnya yang menjadi pertimbangan utama bagi para pelaku usaha di berbagai sektor industri,
            terutama sehubungan dengan aktivitas-aktivitas bisnis dalam menjalankan dan mengamankan kegiatan usaha dari klien kami. Sehingga klien kami dapat merasakan dampak yang signifikan baik dari segi pengelolaan perusahaan yang baik
            (good corporate governance) ataupun terbantu dari segi pengambilan keputusan yang tepat demi menunjang kesuksesannya
          </p>
        </div>
        <footer>
          <div className="foot">
            <div className="eks">
              <h1>Eksklusifitas Klien</h1>
              <p>
                Kami hanya mengambil pekerjaan yang sesuai dengan pengalaman, pengetahuan dan bidang keahlian kami. Ketekunan dan disiplin kami dalam menyelesaikan tugas secara tepat waktu serta pelaporan perkembangan pekerjaan secara
                berkala dengan penjelasan yang lengkap dan terbuka kepada klien, keramahan dan responsivitas atas setiap panggilan klien, merupakan kunci utama kami dalam meraih kepercayaan klien kami. Koneksi dan/atau jaringan yang luas
                dengan Pemerintahan serta manajemen pengarsipan yang telah terkomputerisasi, memberikan kami keunggulan dari kantor hukum lainnya. Harga yang dapat dinegosiasikan dan metode pembayaran yang variatif serta manfaat tambahan
                diluar tugas utama kami, memberikan klien kami kenyamanan dan kepuasan atas layanan yang kami sediakan.
              </p>
            </div>
            <div className="contacts">
              <div className="loc">
                <i class="fas fa-map-marker-alt"></i> Infiniti Office, Belleza BSA 1st Floor, Unit 106 Jl. Permata Hijau, RT.4/RW.2, Grogol Utara, Kec. Kby. Lama, Jakarta Selatan, DKI Jakarta
              </div>
              <div className="contact">
                <p>
                  <i class="fas fa-phone"></i> 62 822 6232 4242
                </p>
                <p>
                  <i class="fas fa-envelope"></i>info@kesumapartner.com
                </p>
              </div>
              <div className="sosmed">
                <a href="https://www.instagram.com/kesumapartners/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/kesumalawyers" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">Copyright of Kesuma Partners</div>
      </div>
    </section>
  );
}

export default About;
