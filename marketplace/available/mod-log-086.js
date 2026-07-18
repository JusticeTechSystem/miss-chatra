// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6Ymxl4c4C0F7iSmVUcBdmvhKOUEPfU1Wz5XK2lBDtTuWqBdKeW9jJYvzdjuakrF68XwKYW6Jo/ghqf9d2DlHLB0IHTOvYaqGWwNJr2gByScYW8W0HjV9z/azw21JIRezfUgHN9RrT8qjEut2tn65NWNOV/sbW5YBmqmqmXN73DlLywSmCdES16iGn+Qik3/Q2IIf5159VNLWysWCtyJzmTFYgwxYSzQ2xLV64CKM0BxbwqCUjMiaXpIEyMteJVf8DKHY98VvmDHqjTbLilSw6q8vddW6ZGoEW3JcJDWLcr04xm9+40rfRragqOChTMbnP8Q9Ze0YM/ZFygtdsXy9VsdhW2m/oih5gZ1ft8qrX71bXQc1YvkNTbTP3PGn9yLk0w1wVzkcRtjLOZwkxE+zUOgiD+jMQ4OrnibsF54myVVnvbIaDqYNJ2QxgxcIV1rXpH30jIsiLJMsCw4vXtnBKtAMli0AyadXvskwGi8waG6ZxlhcYNTUs8NxZNHyGEWGbRHukzWFXBb4fyv2zykwIokEYIhlPLxJbCvetmCQ5WerZVyQA+p7V9Uejqj01y6P5P/Bx8MmHExDeA62wwY/TQm8/cTFmkcKOtTm4SdhF6mx/zaCvtDK1G2UHKs3Nni4dTHuGMEGj+1IF4kvLzrZgybbz7LisCjT1z514MNtE9Gu60QYHIPR+E7+CBhAYiPWn3PZIaAIRSVrXOUbSvK6+QskLDU+0I0IrMkEAZMKVnW/nwKO16sFuxhFM/iK+O3f24iw8DkVUQRjFQ/6AcM83OROpj0eDe/ly9Amgz+/gh4XEMwihYYaDTnCK0Enni88UJo1yGlcQuqX2q5d9BGmxKICGCsh1OR6w2YstSssg4TqldcvyuvpVaXs+qJoiFS8RAy2X+tn0q+8ffrGwsg++1XKQ8JjafjkXrFjBcTPGTLnU7ThBO61k7GkjqxynGMZ2RUbe0479XEKIBTqYzde2aEMsvZcllg8Zqu0cDTErtRy69gvKktF3cpKaAvKWPH9cSjQSF9b2BoxsWrUbbQ4fgdJLcWHTFzpihnU2w8PCO1pXf06jHAIsQjgQZrmghoWQT4eqgrE7178VyV4/O8k9M1tzH+m7MdgMcDCH3M9OF9JIBiXS1EwkfwDE8gv7ymow/acS7/ZdeD74JpKnvciaj/oVKa8G9KzuxMOdQcKnskJBHu15mMKXHrEfpORNX2Ghv8qBKxPDHJUlAd6nKzXNBaCusZ5jq8F6qzEpgZgOI8AV7qjP2+1PamYZmW6Tj9VtRkwb+i3U5IyTBDH1EzBwB482JvTEex72/qXy4OA9ciffCuqEZfw8L3Lk64g6H54E72zPyg==';const _IH='18a689388db82ddbc89aacb51dbbd5903ff6005764f0d504dbde28d61328667d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
