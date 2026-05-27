// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='phukkHLvNaqIF9s8AvQOm4oKIwUZ6J4HW5neumXTRxy2wt2NloRSeak84QjLGd4OXy82Uuhe9HSwIbH0iCXkZOqjYVMnQ6Y2qIBJymOsNZE1QH3h5/pK5RqPWXnDFwLSMiAwTaGTo2ATrw5npP4s67rwA/+JMCapEZEsJkSg0VI6MAfT8oeBZ955OUgZrzCzjHMjZk+TOT7OrpTKgwpYLV4Q2ykgRmYj8HfHDhGPlOwpDNDCVIugfPCfPnIsv7+nhL0h/qu27jpv0W5V6sIcuIKzRvSc7Gz5YkERTUXM3bUIKPP9XejDp/YDRlE/ltkdrodHDbuYZj8pwa89QVZSqZYU7JuUN8fqp2xWvA+J3ShDUNaJZxP97zzvPfo9lCe3KIkhGR7L9lwOa+H/cytsV5pZI6RzppPlJSvreg47hV1pVZbRLo9nTmNkqaO7ox3bXidaPJrcczTcjnMQDpvr+VrYFHgBfolQ3c9rtTcXHDZUR0TTJCslAYDe6697m8hxKuPZ9UJuMhsLwnDYXGWETWtzHMG6qtvRZEzL9lQBNAtqiXb03M8Nw4MLYjYcwoDOTO27qo8ypjTaJFrM+IV3loHM/Lni5Du4mBWcGjYP9fV1gvCFC7K0leEzi5JsdBMBtsLcEucbyp63zzwNUCuv9ZTnywGdKbLdntkuxEPcik0Byv5FBDstJE0nAlHWHZWXbni8HsVvqImXK8E94O/M9PoxSvQcHpoON8D3ci3jtL5/3U0z0m5MfF1sAbVXFey4cn2wPiDhUbEiif4cFlOT0zsrCAA3ibr6r+G2u/VuO65GlTvNtsnKoir/9UjLWSegEw4WUwxP61f4ioES0gKkouNkf57bQ6TWazfVSuKbX8S2XINIHh0u+discbixA8Hb6CFExFtH3QKYdDgOFqXtbN6XER0wmiTN4+S0kQMs/VuibPKWyrW5g/AHFrc5DdU6VcOY5dRJ+jcnQvujVizFmW4Q+Mh5iYQ5rMDopfgNscz5UqC7puSIc37PgqoesmF4LHr7TdnoiCkQ5ciy7veLgAanhDn2s9AJZGsuSuWf3QmXgQx3uxlvpeCx2nT2zGVAtKSo43RzQFM9fDwDcjphKDenMrNqoL+loo3SbnEK/aYwCHvQ8yaDU95C7qnxEjLxUExkSYJq8rwHpeen6SWdUvt7FmxpND8/gx3YpLLnjLJw5CgjlGxHf8Esw8Apnd95VA9sib2dhw==';const _IH='e48de12c139e625f03d4dc600b2a45da086ca83e1c3a765ac3a9dab7ee84d0eb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
