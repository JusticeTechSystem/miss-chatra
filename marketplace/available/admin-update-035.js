// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/AVEyhng0YAmg90twI3vMBOn4GyIXueJLqAaano6AOOxIT3McYQMJO9QI25FaLb2KnruiPkexQcBpv0aWnNd5pFVIIwP82lHQV8pKQsLgXb34faDGmhMfJgfeXHbMY5q5OwVnZBVU2m2IljomnQid0nhi23Ka0GAbv2Zs9KZYz3dO/ENpB0efJsYA60S2KCntAPnwz+BpzYWdwMeF/TqX37eTgxgF3jWRUmtmvGdT5ag30UiG1wKEZirSKw3wZTjlKeyc765nQDU5sX63yYNVBgzWG7tHK+iyaNH1rwzkQOwQ4W2yLFksPoLJTezFuCE8W8dXLG7CFayTMUyei3KtEcq0iSF0Pg3yxyVS7Uw50Oa1yO6SU4+VLcIxVKSR/U63+0uX6qlvFvpC3Cec4NA/YTTMbOTovuRov+gq2r0mg1NqnqFRgwUfFbOCT0jwGe/OhWIY/8EjrXJvFb99hv2MrsjcUY5qAkRb3BrCKzK/9mjU4jd33jUuurfAF/+PhGJz7ko0oroT4E7JqNIpzX3ctYwbPjpaerXYn2yRrV0emHPzlKb3zWHRnb9sDvQNP1XoOJTJlKAfiEfze7mYxu89wqoKzyLtQuXWSMG7LD+ujRe3bsN3XJXYbNXnSKR/KBqyNEteI3cnYkUeCSSp63lLRCAHDTedd8S7Nxe4P97Lb0Ldn1HJwE+pph91v/i0737RrC5Snfp/NbUlmOtShtpZt0JrFa+eWOw2uo8BKKEVBjoTcKesVwyLSMd9kMzfFhjMYVIbbCo69IhQKMKSCIOuQdNyGBhY8NpE14/qHAjULHzf1xDpFkkEHYEwpRLMnSMLtOJIaB6hVccCJGK4x0S7WrdvuT1/4hdd0DNUIB+mS95i4+U7YWIhQvZLaEeWcn7Xrab9XdyHYFq6+cFStH9teMEfE7qwNttQXpgtO4/2/oAFDR7DMUytiPZVm0CefKFrHo9VrZOsh3gbmnmX131KKKQhuHU9xMRdslq7aXGuqBC/RthUt2hql76t5GK';const _IH='f43d8691291d6d8b19189f7cf65514003b49be87f35f5e0a647b8999159134a3';let _src;

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
