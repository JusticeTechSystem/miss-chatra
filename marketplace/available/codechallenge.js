// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h6f9EQ36kSMTvGbuFtwjvk9al+L2Vb2SwW+FUpl2sG5xslfCYju+nqqL9eUf+SZV2MDMDI+wJTbYwa0OmCl7xDNAYnPhpmpstYKdTw9xNORK+EiPy5j9IUuzCfwDpoCX8WDcol5N/xAi3j0vPOVODVVnD77tR1i4r4h27lVeMa+Sbn1HtJXE4FAMd1B7LBTtIgUflFIUgT5nvpepHvcL6To2qHZ4qB1Uy0W+oHz7fvnGgl3s1bLeJ8GF9bTUAH7NsZ5L/r0Ca1353kLO0A2k0IAgAYk1PJTr3bYvHEU3PML+WPuhdsM9o0Z56dk6eKIY2lZy98h0C1Znbdh7CV7ny/4xu7EEQ0aN5i0NPzkZON+t7/JKhua1I8AbOkWWWOq2hKX8YmRicQwpvl3MDZ6qfCrvyd/Mtv/Kytf+NbNMH0teJUtiW/4PA8D2xJuRfbeF5DtS4HnYy00wKtfE/xz1lZQ6AikK7fO7HA0az0YPIg3WhIXQhW0kZHpixLiqpuufQhSaZLwUfaUka79BRLj+4K1IGDsEH/3b30k4llSqfyQPQUq22uYTb2SzUTuDdiJQxqD1W67+unMYxx5GCjpcBoHkzPX0ZQU4NRgb256IdKm67auRIEX32qa0GbqdE9VcfSxgSpEb9V6dbR5kEZFEeYNmUSwP00MeyzFphiM06U9LyHIu0H5KrDs0qxB6rvOMfon1dW5u+G3poeQuvro64kPdmsNADfbHt/K1hSLY6qZ17zbJkS0X57+033oUFn7Q83nZA5U+LqA2FLoY/M3lbOTly71bxdJqV4yL+4fJsfepRhLRUP0jni0krwntiw7z6ZSl8cjlG4Fv3xGqM51Gf4NKG4vutTQsDZj7+s0ne418frvf8nl7ieW4Ey4wASr5QZIzDZ2b8HAG1vnrHEj08MLrwQgeIsKETn3maiP7tES5QyrfGio8jqAFBDanClCCR84Qz+4AgzBmqhucAR9t6hGf+9RyBeOEDgl/7cfvNE468gXy/mPgO9liwEf2M1a0b77us/vDiM/bUJzaMikXWwLDeeD8Q0O3tUOs47vFr1xsXfhiTrhlvi0uhWOTAcS/C8bmUwBlKS2se2TFwK5GloQ3ygmvr0a1yPEWQhL/q6HtQLo8oDLkRAGKmfq+ssJ1TmYevt3+lUkd5EvDNqBOv7y7qIWaSkebXhmWTPdIEVTHGi1PG5v1ndoWZg5FL1Bw/XS7/B8SoUVK2BJP1drZy0YuZw==';const _IH='95f1113a337118d5dad03073941522fcabe5a31e1cf510d901d01f4c4a2eec2b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
