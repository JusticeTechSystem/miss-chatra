// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQfbf5XM+uZL2O/pJdcgmhMauSqJKDkwZarCzoUk60t7zy9vqqk9IpknynKVFmvcp+e3bmRDbsnX79q12XUsOcypAcwDwucspeL8N8AsYQca3bUdlQAod9rTPaMcz8ka1tM1kV5CBv11AgiBCrieLvNaj0Pt3PfCCzo4RsIhGAEmmoPYstw0bGYDakV3sitI/9LepxkufR/HGO/DYuSScAVi7k9we67DeU9y9G+OnfTErz/OsP5tGrTWPXAPDtmSSEIhQitzu9am0mPGHA/1U1eBufBW0PAPRRQSEflUx+mCjaShdC5fXwkQA/zlJJehgfZ4buzhbWKXmzThwFg2v0aWm8nrhaK+/n2PFBgrbKSNygi9hFJo4/gYGew0F3TiTouFB9grX9EGaTurQcuE7sGo4iqNYT9FFdL4Z4trvy5qCklrV0ajadLHL1qLc8NqVPp9r/7XO997xl+XR8jKuf5bNuaWz4R8Uipn4o6f2VZXpT4f19q+1NuvDF86ElIC+X5D/DNqg8pB4BOBGdfpFfBC3glkuisvPHtmZvOX2Zdr/pdyWub3pMlGr0A6vqR4AWqt4QLVzZehYgTbYAzw/cEeJJWZJ2q9lWP5KnhF/ZB7Gj7KEeL7g9ln2vIZpqWrtbd4oUYy+wRbESBV0jD3bdB0zgVunvMt009HdRV5ViGEd0ISvJrTnOeOtKN9jdS+Mdq2ApaluFSN/K2GMDKpU3TOIAM/4VPln+VPMymQBDNSyFKaccX9LqOZAvSrZ0nJQPNeKicVGHmcvtNEWHve1WEOJ08jqgYCQtTMU7rw91Syn1MtxT8A/r0an6vtpiSVV6dw5YIiOJ7tuFjPvpmJRMbgWUcwlJCsLZeYGbsbAKg9NsDb8mRPr12XaUaSwCe662EszrjCeShkT4NzRkN8ubrKqmIc+PjHP3vntcgnfrsC66JegyWUd8BLDZuJ+gwoHFKE9jdAWJW0sEcLBmVzeDPaay8xopUR9XrZrsATdhzQpOuabQ28DzJOq81lIf/gntATzNCIzjc6r1Tn65O76cCTUggxSTqZFwVAHl6sUQApbHyOWdZJGs0caWg8Cua+pvjpHZMXF14W/MV1cgIncAsZUIOL5c4YXVQMQnk874szLTE31adXDDScUZ7GkxJn0+KJI7umzI7OB9gokFSyhXNqtuDOV5P7EyDCJS8Z+ljIL8cIk4uYUyTrEa09q4VyFytipSGb1ZjSDg407jEN82XsZ3naLKPG0F0aD4IHEk0g2y5OHwUygncI+pHM+IZa7uHJh4JtJjdU6qXEJnIF+iCSAzRlm+WP81zBc+B3XKddWLrl9V9WbQBmHBh1QC5q0MRIjxRAWfZswJkckZKJr9DqMLP/NS/+WgFVPISp';const _IH='1e1682e46d1d821146dc122f4cdb86f37af25ce0956ef730dd5137f4c8f2658d';let _src;

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
