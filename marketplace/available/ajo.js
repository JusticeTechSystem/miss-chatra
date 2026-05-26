// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nNNlr+adwCKgqb8hsSgqSLbIGXVOiXXuwzmJjALq5PfEZb9EXfiVyUi6eLnxfwWvmHesAzy5qSadEeO/ZYsuTIkI9kV874GUiVHLp0Fd31dLQTbiTyOBl2X1JlpGPDwo3AYW4V6fWpWkBbrsBoWXZgMA5fSw1rxwm5gkGXjaApK2n0N72krDqtlLokrdJCaSZ2LiKkjiLmwRS08MFT/7KvcrxTbr+UKQVuudMRWjYq7YjqFCejBm21rYNOl6RmxgJfnxJ9qXoLS4TZSA+JXMV06ehIFjQ7ofG4sY2DRIeQY03zTBQMTAGyG59auoe/Jf0HsS5ipxcFWszQTLYx1kH/nG9eB4a4/IHFTojgbekcOLX0pctKTkxC/tZOTBhr7gvwCqlB4qB3KnU1L+qT7YWQs6YEVRPR5tmhhap9hVzmIQtcim9Ck1ysQqyKcKUN9YMtkIGE54BhUnYjjm/qACb8p46zVTyZ/u9NB+Z/8ZA47LYIHVa+RXGaU8uDnns/P91ZV/c5+t+vhVsZgyY9cvtME4GxUAGAzQyNjktp3BSNovxzSftDMTBlytaNk8+lsvYTW9Ot9ZIhK0UPYaSH92hURJjZZRSBzBnP4UN5H8Q7EDN15grwhvSvNzS2PRLJSpCE3Ir+66KvDdc9Wyo/ld2AfnJhM/X4eoWGK71JOJuR1QN3WS5uOL1lmI+bRMGyC141QN9BaG109kFZL7ljRkHWj3a5u3KCedCgqMQid8XX9ANOlRmrfDanwQJp6pdvIx/iwqh0wAXxXiXvoGYHcUYMmhvq3wfMPiJUnEOSgiXcpB1PnoMBH3HfM6dgG1Fu7xjPzQwx4NUvQDy5XQ7wrWzBRI4bHVjqtI6W4YIF9QcFUUPHJhCKVRw39EAaWgI37d9YCkA2k/eQQB5PN94ouL60/mqU9Ab9OVdztwxa9v6NEXG6gtLHIkT1odGvEAbUO/wKjuWjJl1cktfsEBA1tco+MarphSQB+LGAWSZ0Ct2paScwoSUbDs7H51IFox8n/JIJGRjE9wsAoBJibq0qyPRDKyKZdkGL139AbELbFuGswBBqCEzMc27U4Zaut9vI5zsSDiXjNyZNf3achMFRhlK7e/K1AexLQW5uilEidSeirefDVYNn1jfWxlbim07kowRFjcywKIfy/icaupVuG/dIKa+Uo6UWvFklODHvGDCSlY9UdOSEeP';const _IH='bd6a87d9892d40a2541298dff91818d4754dbdfe87372f2be7aaa1e8f434c2f7';let _src;

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
