// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YdXRa+ajWG/y3VPjRmP1BHwXr5eOnpLTOssDq5VeWHccqFbgD9Is7JPkTRZ/XTDZvGrBPXxEUiYKpwfgUPn7I88sIjr/mUCXrNILkDcIeubksgyO6e9relVQFKf5i5XQZW88oAMu51KKno5RMXuDgiLmrkl2tMahhFtf/UHqCXvEUIfDOMSmRun58PNHjGWrdc5Egof7jQnGrVG3O7f6XpgjgiFMPkPqmADZPAg0kWtSycKIHc1LWxOvyEX8Jpvz7LAGklL9MKahEH4sueMcZxrPN5nDKYikSX3Njwj0d/YuDICChpR6Rl5xIvZaa9KqZt2ESE2B+KYPlkHQI9EY3Td923ov2fUTvXX9eGzisAapppS7FZQzkc8aAVHY1W9WxOC8sG7GxWU8vV/Kw7dZslRz8R3mRNXO6xoJ6Qo872RvIJoyEatapWw/14A6ibzKfS068r43i4pQ/BNArhpDWsqS6bKnmNEUNSYfJkTR4ihNzBRn2EYPGCOkH69ncueC/VMJ3W+tgX6wsNXSbOxd1B9E+j626y2S6FkJ0PZ/KLk2LpiJDvMOMUd+KYmHLF1xkZ4/Ce2xnIdVImAcFFPo2eecNec4eMyUDgLXM8EbabKqSo4IFjLPtp7NELPnLYJ/r2R7Fq12kJxSnxa8VkaqdzD3JjShl7JUIO5wci16V5DTSS/tAq0SWRwZfBPSqgsIvfc0zPgsSyw9JPSHyAYYmR97W0d0tCJGPIopj6X1GjyYWjjKXtjYUrlbUyxP9SRhiRZF/C/UCiMG/jAHCZOZsGa/R5f0GKsyeXe6JlrnR8De3eWdSAfGkd6mVDv0uY8laX9rkvoJlgzPpDpGeoy+S0gClNinPOC6e6d1bSSQCI78THpVjbzbj3Cddm3Zn6qxf5gkZJ63lB2CMpelDk3mSGlm82/G2Jxut5IoMlta+t9l71w4a9ba0mYajphDsJeeVOHI2V/4TEWZBEvPd2hClAcWzv4t2SQejXUGrdbmo5WiBeUTowwgesqu//3+XhJXdrHnY1dyVsYY6zhC83AbZrUWt33MMHk/riWe+AgkGtlGibYEaod4VXvhkkQ3hge/3dldi60HJDlCITNpYkAnky3v3qhvcwAkbERmtsrdTxtQyls8+QfkZhtCOB9MoZvAdVX90yFym4mvu6Go1sYKchX696lbHiHkcTY8D4hb95lKOt77xsseQu7gLWYlFLA4zonolIkgaCgnSzX6IHfwhKQeAoizoyokNI60i6uHfjWnjmxRdmPF104YybSneBQG9eiieSV19uQ7QcW2XxVKh/XS1OTOK99cEC7ib6EnDHkB/QETf9BJ6+XXQZQad06mts4ofidLetkEYpTxJevfWI/M90gKz8wGjYj2c9xb';const _IH='830c80ad386b17a169843b57cfd1bd7c4b8be19085f2a006d78c78a23275d1aa';let _src;

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
