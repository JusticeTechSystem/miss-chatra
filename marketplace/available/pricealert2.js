// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kMr9vWXXyVV9vSzJqJ14joRRM/kD+hfZHFkmtZrFFFHvo3tACgpG8yeIxcrtTUehgcVcp8pboyWfJt4FgYMiNGb5x1DFyxSWoZSlgIlKpU4rZ+PIuhZ07qPftL+qAe1LJGXHTe/zdXqj+a5xGRtEvKnQBhgyVgzswxtP3pZyClfB1t6EnLRzMB7opvApVQi2X80/3dW2zI96dfxVbFNwZKyprXCqZhNjeI/U3rzlOX9YMpK5JGSQsaV9WuJZyvxW/2+F/EbA8CYTbsA1Wjg35oTli/JCdManrKXsUfmV2eazqxaDxzlgP+AB+ZDhocoRQQRWCDez37h7i9q1q7ZBDw1o/HjY5upDdrN8lrzFIvvKjxAp/JgxD7PuCPd7GHrrvUd0ahzHQw1m/iMVbKqNyfkpCynKEAVBxxqYYzhSJ4xqfy2Y9XPc3cqhvT29wqbaQoXXJ3lpbDCgO/718h1LmVmojp+a7z4SsB/Dap6SwV03fmsojdtRf0f+w9Cu2sg7BxpY9/xrhetDrpGxbEVKmSqZnpJXQBwruavJ8sbTjtNNhPcoOMPA2BTHd2Ovh/AB6FQMPfkyNXR7fu+U/44vQOUblSFsZzDwnDxWBEfcoFt1o4hU7g6/QeZGwlNY1cC0RerJRk7A48dQCdqBfFWiLMAHp7JZWEaMoK2Wl6217m5XXtSNDKl0SrBEj1BGicWUAhj+9yitPa8OGT/52sWGDwsfhNZGRV/L4chd/T5jSUNEJNbc+qn4qll61vrGTkYkuMjHS3i2DCEbP6pwhIP5Z2sm70Z0deIaG+O6ZKdDEx/DHDlMZtykSx8pWb8Mv2yXn8JhiM1CWyoYMQU7RJCFZGW9yh2m8oec4zoLrq3L0fvEEwLxax8nArnlasPQYbQ12fjHHl7GCCcGLfGXfmsdYM7Y1WdYUPSSOjM0J21+0gB2n2OHGr+jk8D7RtGTu9FjNIE+V5EhpMhll3hyzSE9CZRraUSnoUZb5L6UiUUkgoNS+cMPAiNmdbcFzLWYUsMmbDP9Fe43QYe1YT8KrO/2P1KIU/ySYXuXB4H6L65Ydj+vhPaZD0I0seWJhCK0D4bMaL5Xk+5f3nOj3ltk5WsD/ZGLPjrvfE5X6gaYEOS+swiUrDaPi0grVBRNyjOxBSaLwhRE2QOM8FcVoyKJzv005zSsUxk/UhMEsc4cdTD0jqPoPExs5QIj7n1p3tD3gbL9lFwzrIA=';const _IH='f98800298058c04eafbdd56deb475696279dfc604270330be6203755de922f39';let _src;

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
