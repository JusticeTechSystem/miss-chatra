// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2kYij2DNQ530p/7iGluOzStqzvs7uGExuE+YQ8ngAt0txmIDQEcLN3zN0sLOTE1ngeW3dA0nnft/5SKN/iTbHRToxNnin4O//bJuTCEj21LQ6GbRwgSOLhdH/eQNlEGrtb31V8BYMLgVof0/dRe8AfqrOA+7DpqIzZor5kbqXkbjfC45ME5L9rFrzxn4J1myH/jMi7gRohilUkVKKZZYU+FkKtBCbUAOWZwRDAy/GBIbekEbyhLBl15t2vfRMKKNRiHeWUZ+Xepbtigb1z6if1KZIjK3cZgKKdMY8Jog2X9sVRYnSxjmVLoeY01Y1aE4x+8+Cgr2qqdW56TbVbGBjUnffT4nYA87zluhpZsZ7UH0nAcaZ+yTFqeGgTMHEep3abg2/kCpBYgTV6wDvJzrWFThEhJeoYC1m/szTSrAMA1tr46jz3UA5jeCQW2CcFgQM+n2dGCsSty1AedfJSbTzo9HQrjomCE0AY7jDwvH3dS3ZJvZQ5Tr/zEc4HbRGjQAc6o3YaNtY2UOEB5lydv72aQye5/gZZXA+YLub49i1QzccDTr5Wl8hgOhURxkgdHbVgJlltMFU21QicQNYmfxObBmod9Vun/jE79X+qK5bbNBgy2zQvNIjPk1dHXwKZHpx+rpzuTplXZJPHBErC4ACO54vMrbf2DJtPDmhtsHTrsghHP5NkIf3mn/MziWR2zBVMrn7FcUDMdmdG1VnMPuNGtgT30VG/I2jqbypXs9LijmYJuBjngdTdWde3xiBGb86mRUnhVVGTC0NAvonPhIQsuvboM9jhmxI/YvxzvzPlnSASz8C4qLw4VnhQUktE3avYksEbbuVsRQesuq6qWyfu0sUIzhTbqhxSmTdG7UDIk7U9bXOB2/LbcGCEYiPD+LepgsImZu/q30QOT6OhpWZkHlQaVBrl2b5kbleOBrQ1NGQKqACbpDBELeFDWbq0IWWcicM91pWLgU0Q1CphOpzJSL16ObutWhWZTVwgEa1F5xaSaBrxhCzHmpgBqY4LCFtqFBSKyUSlCKkK+bttTHd8WXJGJcfl9UQ6MLdRFYKPFjowQsMBoxmwS+OQZj6qON5vLuLocIl5cSAYv8iPKmmAxcVZOsB8awLAdXJQ8kHGdnvSBqjDED2lTgRLo5qKVyHI+VAu5bIaQt3SXH23fS6IM9Ddb5RoKqawtNEhjEcNK43bn8Mm8SfJJkeo9oy2PqK17I5qf0sD3hYf9RM66qQXL0kLEm9Ib+3HqquALY9noRtl4hA70HUjmXIKVpr1MOAzl6oGpa2zweGASRkftqPzF03nP+5dRBOojiVL3G0NWB3tufvRCBNdlqAhMF4reog+S7Iw3tguC/MxX6Z7h+3anVtiOIjBnfWgCH2PbhMxHQA+yLqrHKfqgWd2RW6df1EZ4Q2P7XPtfgjRQVQ1VDeh1ApD2W3gJpWc91DDm7KV+ejTMz1kiIPWQRw3BTKp/iGc3ScK56BzSTPxV5W4T0WUvOP522spEjMdiZ9S4=';const _IH='5ed829f1a2f42df9ad8179a32b43251123decb832f8df79c7edbd0a28205e8bb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
