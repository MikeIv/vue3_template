<template>

  <router-view/>
</template>


<script>

import './assets/scss/styles.scss'


//
// import message from '@/components/Message.vue'
// import newNote from '@/components/NewNote.vue'
// import notes from '@/components/Notes.vue'
// import search from '@/components/Search.vue'

export default {
  components: {

  },
  data () {
    return {
      title: 'Заметки',
      message: null,
      grid: true,
      note: {
        title: '',
        descr: '',
      },
      notes: [
        {
          title: 'Заметка №1',
          descr: 'Описание для заметки №1',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Заметка №2',
          descr: 'Описание для заметки №2',
          date: new Date(Date.now()).toLocaleString()
        } ,
        {
          title: 'Заметка №3',
          descr: 'Описание для заметки №3',
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    addNote () {
      // console.log(this.note)
      let {title, descr} = this.note

      if (title === '') {
        this.message = 'Сообщение не может быть отправлено'
        return false
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      this.message = null
      this.note.title = ''
      this.note.descr = ''
    },
    removeCard (index) {
      this.notes.splice(index, 1)
    }
  }

}
</script>




<style lang="scss">

body {
  background-color: $white;
}

</style>

