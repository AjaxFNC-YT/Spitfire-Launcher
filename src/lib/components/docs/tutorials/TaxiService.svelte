<script lang="ts">
  import BaseModal from '$components/docs/BaseModal.svelte';
  import YoutubeVideoEmbed from '$components/docs/YoutubeVideoEmbed.svelte';
  import { t } from '$lib/utils/util';
</script>

<BaseModal>
  <h2>{$t('taxiService.page.title')}</h2>

  <h3>{$t('docs.howToUse')}</h3>
  <ol>
    <li>
      {$t('docs.taxiService.howToUse.0')}
    </li>
    <li>
      {$t('docs.taxiService.howToUse.1')}
    </li>
    <li>
      {$t('docs.taxiService.howToUse.2')}
    </li>
    <li>
      {$t('docs.taxiService.howToUse.3')}
    </li>
  </ol>

  <h3>{$t('docs.importantNotes')}</h3>
  <ul>
    <li>
      {$t('docs.taxiService.importantNotes.0')}
    </li>
    <li>
      {$t('docs.taxiService.importantNotes.1')}
    </li>
    <li>
      {$t('docs.taxiService.importantNotes.2')}
    </li>
  </ul>

  <YoutubeVideoEmbed title="Taxi Service Tutorial" videoId="CxV9W2FuY30"/>
</BaseModal>