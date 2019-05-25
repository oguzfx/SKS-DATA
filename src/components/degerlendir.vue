<template>
    <div class="column">
      <div class="container">
        <h1 class="title is-3">KURUMSAL HİZMETLER</h1>
        <h2 class="subtitle">Kurumsal Yapı</h2>
        <div class="notification">
           <strong>KKU01</strong>
          <a class="button is-danger is-outlined">Çekirdek</a><br>
          Kuruluş faaliyetlerinin tamamını kapsayacak şekilde bir organizasyon yapısı oluşturulmalıdır.
          <br>
          <a @click="success" class="button is-success">K</a>
          <a @click="danger" class="button is-danger">KM</a>
          <a @click="warning" class="button is-warning">DD</a>
        </div>
        <section>

          <b-field grouped group-multiline>
            <div class="control">
              <b-switch v-model="showDetailIcon">Detay</b-switch>
            </div>
          </b-field>

          <b-table
            :data="data"
            ref="table"
            paginated
            per-page="5"
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
                      <a @click="danger" class="button is-danger">KM</a>
                      <a @click="warning" class="button is-warning">DD</a>
                    </p>
                  </div>
                </div>
              </article>
            </template>
          </b-table>

        </section>
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
        showDetailIcon: true
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
