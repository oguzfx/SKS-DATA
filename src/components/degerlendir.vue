<template>
    <div class="column">
      <div class="container">

        <h1 class="title is-3">KURUMSAL HİZMETLER</h1>
        <h2 class="subtitle">Kurumsal Yapı</h2>

        <div class="notification">
          <a class="button is-outlined">KKU01</a>
          <a class="button is-danger is-outlined">Çekirdek</a><br><br>
          <p>Kuruluş faaliyetlerinin tamamını kapsayacak şekilde bir organizasyon yapısı oluşturulmalıdır.</p>
          <br>
          <a @click="success" class="button is-success">K</a>
          <a @click="info" class="button is-info">KK</a>
          <a @click="danger" class="button is-danger">KM</a>
          <a @click="warning" class="button is-warning">DD</a>
          <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
              class="button is-outlined is-pulled-right"
              slot="trigger"
              aria-controls="contentIdForA11y1">Alt Kriterler</button>
          <b-table
            :data="data"
            ref="table"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            :show-detail-icon="showDetailIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
            <template slot-scope="props">
              <b-table-column field="id" label="KOD" width="40" numeric>
                {{ props.row.id }}
              </b-table-column>

              <b-table-column field="user.first_name" label="Açıklama" sortable>
                <template v-if="showDetailIcon">
                  {{ props.row.aciklama }}
                </template>
              </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <a @click="success" class="button is-success">K</a>
                      <a @click="info" class="button is-info">KK</a>
                      <a @click="danger" class="button is-danger">KM</a>
                      <a @click="warning" class="button is-warning">DD</a>
                    </p>
                  </div>
                </div>
              </article>
            </template>
          </b-table>
        </b-collapse>
        </div>
        <div class="notification">
          <a class="button is-outlined">KKU01</a>
          <a class="button is-danger is-outlined">Çekirdek</a><br><br>
          <p>Kuruluş faaliyetlerinin tamamını kapsayacak şekilde bir organizasyon yapısı oluşturulmalıdır.</p>
          <br>
          <a @click="success" class="button is-success">K</a>
          <a @click="info" class="button is-info">KK</a>
          <a @click="danger" class="button is-danger">KM</a>
          <a @click="warning" class="button is-warning">DD</a>
          <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
              class="button is-outlined is-pulled-right"
              slot="trigger"
              aria-controls="contentIdForA11y1">Alt Kriterler</button>
            <b-table
              :data="data"
              ref="table"
              :opened-detailed="defaultOpenedDetails"
              detailed
              detail-key="id"
              :show-detail-icon="showDetailIcon"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page">
              <template slot-scope="props">
                <b-table-column field="id" label="KOD" width="40" numeric>
                  {{ props.row.id }}
                </b-table-column>

                <b-table-column field="user.first_name" label="Açıklama" sortable>
                  <template v-if="showDetailIcon">
                    {{ props.row.aciklama }}
                  </template>
                </b-table-column>
              </template>

              <template slot="detail" slot-scope="props">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <a @click="success" class="button is-success">K</a>
                        <a @click="info" class="button is-info">KK</a>
                        <a @click="danger" class="button is-danger">KM</a>
                        <a @click="warning" class="button is-warning">DD</a>
                      </p>
                    </div>
                  </div>
                </article>
              </template>
            </b-table>
          </b-collapse>
        </div>
      </div>
    </div>
</template>

<script>
  const data = [{"id":"KKU01.01","aciklama":"Organizasyon yapısı, kuruluşun amaç ve hedeflerine ulaşmasını sağlayacak şekilde tasarlanmalı ve kuruluş faaliyetlerinin tamamını kapsamalıdır."},
    {"id":"KKU01.02","aciklama":"Organizasyon yapısında en üst yönetim kademesinden en alt birime kadar dikey ve yatay tüm ilişkiler tanımlanmalıdır.\n" +
        "Organizasyon yapısı ile ilgili asgari aşağıdaki konular tanımlanmalıdır: o Sorumluluk ve ilişkiler o Dikey ve yatay koordinasyon ve entegrasyon noktaları o Gerektiğinde yetki devrinin nasıl yapılacağı\n"},
    {"id":"KKU01.03","aciklama":"Kuruluş, organizasyon yapısını ve sorumluluk alanlarını gösteren bir organizasyon şeması oluşturmalıdır.\n"},
]

  export default {
    data() {
      return {
        data,
        defaultOpenedDetails: [1],
        showDetailIcon: true,

      }
    },
    methods: {
      toggle(row) {
        this.$refs.table.toggleDetails(row)
      },
      success() {
        this.$toast.open({
          message: `Karşılıyor Seçildi`,
          position: 'is-bottom',
          type: 'is-success'
        })
      },
      info() {
        this.$toast.open({
          message: `Kısmen Karşılıyor Seçildi`,
          position: 'is-bottom',
          type: 'is-info'
        })
      },
      danger() {
        this.$toast.open({
          message: `Karşılamıyor Seçildi`,
          position: 'is-bottom',
          type: 'is-danger'
        })
      },
      warning() {
        this.$toast.open({
          message: `Değerlendirme Dışı`,
          position: 'is-bottom',
          type: 'is-warning'
        })
      },
    }
  }
</script>

<style scoped>

</style>
