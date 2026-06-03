// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SOFYVzfkDCtX7HE0wco7s1AphRgCWthK9UC+AXoEo2pY6N0BmDbddZehrfsmbARMLgLquLpMB4LQP9I+K6NNCW+TPsMI8tyZnADJJ3bhf3Xi4adubwVIV517Qfi68lMR/lWJ2vcU7IMKpliNeKOsgnpvE78QmnJfzkhWjH+Yii72X4E1uwcvT0VWkhbS9heJPrTjm6GEPe6QsznzwbC0K5Ch3Ik8IKpVUQeXstlMBVeteiDg/+m1x57WFfzGFPvRDFdd1k9b8LelOvVEMLbO/EKUCiE/nFsr8oamvQRG3ETR9tibUkTJoqjPkYgDo7i18NaAVpvLFeh/DtVcKOAf5fr89Bgn6nB3yxztuy4O8zcTPANZmrsvexv1lOWU2AL8iYQwsCEVbnOClQjPLVnWq1EBRvTtYxpRyWQBfsfmxOgK053zSeLGxm7ewlyL/ilPpykR1e1pWLm414nH0SXpMVdgFj04h3wnSkQz0ASXl8GKH9KxVa6mZClQA3l/BSKCD9O/kaIkuBfguhx6iuvERiBYjatQu9lq6AC6aeN9nbozcv3SlDlswEqn77m0U2+46s1rAiLauI//YqR8dJ72/ISNIhOzj7VmCC4tvYOs5/FAU4RrQ6V2j8zBgFouRSmfaMxiA/hK+i3mSOYPmnZFiLoxWEo2JUH9O1xmnR+IhVaTfdTldUtK8yt5wt2d0k3XsBk9ABDVPKYcE9MQCxf/L4gFIk/U/T2if25wL2vnLnxbl+N5Alu2cirIStptL+rSxdLK0o9bHPZMqaRiLti5LBWRACIDHaMgZsDTIgyFqTOxgbG9+uXR0MyEO9yZ3qAWtumSEkEDcNCpf/YVDQJCJfhReaJ/8A7XQcQgjS2QM93nGKMrs0nQo0KOhLS+OQpa6OFarWuEbyO3qcvbmc/7w8CPfoQ21QaNhvcWLat8WVrZrXUWieWp+S3VSghiSJhEGtYI8iE3K2d/ZrKom+pX90VIMc+trPn/37+9kU8x3gNd+ogfZIfFgDYds44YCCdrR9snqzchRlZymRG0m9SOUwLe5UBnj95mgWdWRow6mg+V4k6s7dvyiUv2xdXtXiGmQn6rn6BPi9Q20CtNER0pAZwDCzyAEHekHiw9+7WHwYTWNMdov07lnrqN0/DpQLIHfsssFdA8pd8cY9L7qhpEn+2U8OkDrDL6XkN8//t+s/DdM+HOAQhKRy6c5opYafbdBVKaWfdYXsImXhgsDTIS/zOueGeuH7ORWRxQl0Exp33PNwQSYZjMAoCUFy4SuI1x4PMN5JjM9liyYew2meLga5StSj/paU56tBg6cXjir+1fbisvO9ZSmMDbApnTle1mwJOO6RQ7V2844yySXDWcNU6pkCgC0JCX7el4sfL1+ul1BJyGmbjuQw==';const _IH='5c35a8878968d7dff3d6f5f7239c6513e0289301faae5be642d2ffe544508660';let _src;

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
