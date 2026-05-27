// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZLRoI0FFD/lvmdZjj7m8ea4xM4jqfKqY8yj2rThy0W2K3+gzC6JMeyEkP84ZlMWj9K5kQIHGxApt9XxdbXXrxfOLNHjO3Uz/I09PpTxFagpsK2NITX54pmMoS+Gc5KeMH93qJ9JcLEvSuPm1a+iahpmqmcwL3lv2y0Kk46LSvs0hrMyMmjE2TKJGf7Ue+kbJUzakpLtMDMavtKxmI/bFu03artsh+4mJzTAzy0VdgxgV6e0RvqdiutS90JIDN/+XRK/kv5XIQ6tCU5I5Ze/P1JJ3D7I+dfG2PzaxA9vYkKXHMN8dspd3I4g9/1DdntP8mmHeGzW6+IQZOXzk/Tj5ao+lY5z+eLRd8Hb/wMh0LrAF57cslrPHScet+sUtA3K8hivk2LqXEtTYPP+6sfC+O1JYnpy66mWogUBiJCL2bB6SCNcYMntnhnpH2PXWZDZuUcygXvyYx26H+/HNBB3gmgomc3hmJ3v+R7Cma/EAkUe6u+EsjHM3VBPNxYvNgg46KZySs70C2pnN8/F5jBFdqyeCjvYKAUAot7Hw071NiydwbQYzwijg75f2Zgqrw3756RkPhJC4Q6thhY4Na9bE/ch+zVrFdG2Bzp/g+R8M6ILe6mUgwHhU7co34ui4V/q968TGXFSPsNprAjwmNGr9YZHm67B8GntOJq4T8TiBT/cGgnBZ6gHLApj0QgpF1wisniksaNsQC3Y5XCiWt+7Quvp4FHUZlFNlTt/KdU0yym5Id1IxkGm4shLQD7o/ybV9jn4QlXXJnzQR9O1w2SxHrxXBuWc0Pg0z6YM3usgmAI+17ile6FSZkw6UWNheK2E9f5zs9PqLqf7rrpUHc1lTy99HMtiP4gRjW2By55a8UEMIuHke7hEjY7dvuUXn4znQIFUfpcur/9Nf9nbPRl+4sOR+JQSfGwLgxFs8vdq1e5JJBXkl/KhsQdujGAjccO255qUUDsUG4Qyp3MRta2kgQbnTfeu66nYrNfJdlPoW/9aSvOuLwdMWLKmntfN+AcWtrhjeS39w7kUOx+wNyk8JQGvCmjBmnKMd+R61ovPt1AFNv06apxQ1ANTe/bJtzcZ64SZwVym9MsQoNYK4HK5Gf9IJRiXleyFL34bVlVECBTiuG2EjqY4LDicZOqt8PWSbBmSYXijQ4ziyKPvsXRlqAF12bspoPNssZwlCnuFAuoIMau0TEjSkBJwdagtWKOHov/N6w/o3keeda87/cKjfMhtO/09SX2QYR6PlIVhpgPqGDSbHG8MYlSfPhNmQv6VBt8C0WUlczGSuS9N9WgzdJih7Yd14Iirbp7NQzrYe45saT9AjpteC9MQ89HhbFUk+aVC8S/1J66v/PpTu5LazM1XDVZVv2TupQA==';const _IH='327ef1952300b38de258b6ad81b792c581c4e4a86388afdb972d57373ec63e9e';let _src;

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
