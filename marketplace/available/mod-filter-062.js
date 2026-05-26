// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y5w/29Hq+nY9vLGmFWXj5wYOa1U8UUYFxPSiAyCAUNisodFfXchpaedkcNPePKNEIayg5DLTCr0IRsRNZoc8ws/584O1/VBB6o4o8TTF5+ybGjUKciO1g8YKOrZYbaZoNTJDTSyOANSxYHOph8b/VNtaOt7RHERyvP+UQORxZioi3fw2XQ7y221MpFbNV0sHvk/IIQ1QC/TtPtJNlmekU48c8BtPTTICxzLY9hgEXb1HeoPHK9BFUko4nNTxm//8lLgUXqqL8bFeYmfzDrjTQbN64khLxzyeUmLYVK+xZzkHIy8mxpL4aCi1LoGXnpcwpz6I5R1Oc0vpgU+ubYBuUWYqFApPM0UrGqWrB9+w2Hr1Oun4GeMInPfXOkLjo4Xy3rhH8USDv7Vlmzx6CSKyc6Wp6IXyYPzGhwQB9BDP8NpfX3VVmVKuq0Ex+0+U8UFBISIsgNwRtzHZnv12XI8lxfC0wW5v3QJC6j7icNOSEHLW0oKz2fDbQ559geeoKgn7WgUYdDAzl2Iu0Yx3CIRnhiZ4kpsy+IpBM+GYtl3WoysIkpGU4ACRqcKNuWu8z4ScMEks7jZSjDDJYnE+HfmV3xX8nXQWGd3XlHLRnq/PcAx0f59AsvV6kqkFGQopR5pTsbKj3g8mPuxg/NxQhdPT+t0bddNZG5J396l1IUOuKEZ05B23MSb4MbEEVEKqLVj0sKdXz4CHa0T4+BMccFgkAn7ACroBQvy45xMC0w+a7dm8rDnHAYJ9EmDmh7cJkijjLZukkl/+WgIfQw8dxzJGmuoeGhk9ZvXP7nE15UrZETPmzzHb5sppCJoIu3EO1Anab3voG13oOoUE54t3nV1GwySOAAu0prHcUPqg4HytehqtvQGwZpxyuh7kRUU7tVsFx8q3JczyrFbirdLTdYgOQQ9266KK9h59WHBdSbRdKNoX/P6P2OtVFq0nfybH45js+zKINgh2gvq0zTOO6RaACLKhP4RgcVxxSiV9Mzc6/d6/cmsMst6Yse51O43N3dWR1j/Qn8jIUcl16g4KbhsFVaxKK9IVQE5rWhS68swyxYysTF2yXoXUJg0mjWbHffPF8XciGh3EEAZ0oawVOzyp4SYaiLmXReNrVQ3G71ZM5vhDIU+h4yg2QLZbkRj0S1JM6qVv1H863IMiFpeDosD651yNlqprBU6gbh+j8XHpv1wqQCr0Y/pIOfwiLA53dljEBIVzElUCtoqdWWd3XwQPbsrG0n6cyRzF2r5xH4fJjFnTeKKYNV6yEeUJT86CeVK5LFad4GGSiBurRuQtc1htSTOJzKctspLUB8YJAksFk+V0afgH2+l0h7eF6yBTTTADAEQ+2v6zKBPj401M/G/JBqTBqcDA2Dn/pMlY3TRphXSnpvI=';const _IH='fd4b8ada341fb6fe45e2bce9d73bf04a89b6aa4d4bed72ce7f3705198cee471a';let _src;

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
