// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UjZV5odxo8Gt3vgFlPnIgUO7ciiWuMKyN6swXRooqbqz8JrvGSqDokGI+BFfOq8dpD1x/4zBcpvqgw37dEzijwzGArfph1J4u7CBMSxIrHH4xrJhYE18ruAb6Lt+NvbQ9kt25hWsaN96aa7DYDhM0s0YaWW3Q6OwI5vBe3uXy/vk+qKzoZufjPbE5zj9Fd6rxYUOI5ICPZmyH7VySG+Sd6j9jWAgqcGyHOJezpW+7fST1Czsz9wTacYTA7U6svIH7bK6olniQV8KxWX1xLcHR2cjxCCRqjRG7IWp2ENBBHxlJZHGPLtajMhDiA2hri/V6srkcH+Q9/sIhUSFzmICYuXoN/gpEzXM5a3xdz5pc6sPNEaDfXiRDjKAYZCXiJ4yKuKg12yh2lMXzg8pvkIqMFuebpuytjvjmaZ7VRpoz38QKXJuqESPoD0YBzpYHUsc9bxnyq9BkkhLyaGhtErEUshBg6uSbAF5PvdjPU56j4Lwg9gXkG3afpXu9kwxyKfJEeRFzb2qgtoU2EJQXnyp9N0pzvFJudyiWbf4e1T2XNFn7jdMuj+0T/yoFK+fBbC4R/wI1a6GqOK3I7mPMEFTHnhVqws2o0sZFJ+/UmBDoZgyFkBTt6ndiExJ5gMputH21Klw28xb+cI5DKEYHYn8idQFZg9t3dAf5PsdDtglByFVAthG9ntztjF0100EGUrFaiCAtInMWIcZNgiVYFqHdkBCWmlKYAcLuHyTD9it7VkF2oSslOeQ12kY99LGinshT1Mt1SMvD7+OpOnm+p1CInrg4UbeX3Qg1edIwQEV/59XkYjX81Fm8+0RNcSAsUf0GH7d1LigVNZbjbInB4z8hMFtPBnEsSFgJ/JIIyFBIIn54Doijz1lCodZbgK7hNLH6ArmgTeJT0i8j7n1PXpLG88H1stKgyb2G6auZOCX6MxFmzZ4OoKfc97HK6I6PjDeYNYUYwQKEq4utGZ+cYnmY0w5bNhCCqXspb+O6CRrCh1HQPbcvB8q9hqkJVgMjAJqPEdsZpsK5TnGds5XT0YNbtZenFc6gUoLNM9JT6lv22ZM+oUVtZ2cd5Q2Ye7e9SzIxkzXjzHy5MGkaRQS/W60fy2gyg+2VsMzsBaODe0Eic9oPbsvwHVUGTiNUvLCQxUoDeMu7b3oNutUhy/YmMg0ZCso5DlkNeBp+U+vAeAgWC9ta4Osvn77zJuw8CpOtcqdhnPlr1RG0DZZfSF5fGFlIZ3D/vxQHLx8ST8jRyLtXaG5H3iptB7ka/CTQ0w14KpHHOjhx5+3DCmAEvSUZoUkY3vJKSHBcG+Znyd97xsrak6e0PVy+P81pc0RUTdwywP6AF1apRFuCKJzGuhEUYIitQc5fJvx74p18nH/FWxg';const _IH='3cbf0914bec212728cad73bd015446869033d841756d34e392faf018cb56d86d';let _src;

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
