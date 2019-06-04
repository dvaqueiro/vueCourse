<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <server-list>
      </server-list>
    </div>
    <div class="col-xs-12 col-sm-6">
      <server-detail></server-detail>
    </div>
  </div>
</template>
<script>
import ServerList from '../server/ServerList.vue';
import ServerDetail from '../server/Details.vue';

export default {
  components: {
    'server-list': ServerList,
    'server-detail': ServerDetail
  },
  data: function() {
    return {
      selectedServer: null
    }
  }
}
</script>
