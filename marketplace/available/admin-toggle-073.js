// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dEDNOdmSTUSMDPyNgU7XmGx2EDRbeZurQ8sYVt7qqAokBk5oV24M7581COqsGzf3f8MZ5YaIjOh+No5DrIZPM2Yeu5i78tQLZdYvzGtJUHgyVN8YkrMiPvJB69ITrR39nCG1FZyNF8SJwMJaVAL0pCZSPEKVQvAsNQS11tcRTzsDwrKuv+kuvRTqNYedONqGd5yFJ+LUfy2e36a9mBoiR2ZEgsXENdpdZAMBl9O0A+pTg8qJGcFBkU1MoI2dg7T30X+yjdPbzAzPh7i43I1X5cUoEOJhlASsecS7ZIYsWLS2mYvqSqnwWupk57sYaeshHPnfS2viarq2eYvldInEGo3N61ij76d5j8NEOasKDnjG2hJofs592lnTxpop0TfC4IVeGX3viTUGuTVFh8YTybiu77TROI7OfTw0ygYbXnEYF6cdPXeestVp0lmPQHKDxzSMxdVs5aaaByWKK4BGJJOWOWgV17w/+VyjK9c7FXxaxdRRSa5C99BreuH+cQThbzSnK9ZSw3iON3EXBQlIDJvachbWlLwvyahDAdYGFR6X2Qj+d0O58VUUOp9qbsPa2y5QrDGskkqI6urQ0rec3liSY1N/hVMzh6oPAYAQJKe/jszv/kmFOh2HZVVqejYNGseIzSrBkeeLzv2nYumuzOKhjGPn2UNRcxmQf6Of3NBdunyQ+UlniFxhKALEuPtBNdUfogglZvU++QHahQ3kRdl6qy+BfEM9398tlvY3+osxQA0t3i/ZmjpCT49QuNXy62MBx5MZ+E1y5eBLITz4K3cy5OG5QeZqKJntvi8i3TLWFxJSIWmD9qboMKHYP+2mJKl+XWvnUE0htSCHgm66SkWe8IDo4wJAY3o+cxz6/kQsw1FQrgSVq78tjpGHZSP/xXNqFfYmT9FGlSPCJCtdr8U7/N+uCjG0AIa7297WBiVmabwl3LNovVXE9oa+3AupWdmYVJ3CSCe7CF3QywA6WIhBTii18pq2mfwSsJSEjVn6ly5zG3UILlB4lbzP';const _IH='c53e66c9561b3a97b36feb412ed7b13686e9f69560970033401e389627d44615';let _src;

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
