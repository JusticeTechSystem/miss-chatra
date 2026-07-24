// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzzXyOjtzpqk5xl1KWff29u+IL6847r1VDbqFAQqXcTNHbpHTKS27mcm3FbCNGR9kJYAKBnylozUJm9hCAc30D6sSjAc0zR5rhyJkjnXbykSNhgtOjYO0WNCQK6ATiZszOSwGWenxhO+UKumxhynmyRvIRzAq/Z8s3q0gg6WITKROa3rj165W3kQM2JLnbvQrxPF4NYM+eCGODwRqdfMd0RFxi4BFcheeUPWINOLwO5sh1hZVJf9f1j51tC/z6iVxuWkZK9l0MchAaeU5pju/hL8ZmZAZr2Jxj5dJVJxICYfheWTGUea43CLzqNtlAKRKL9m+u+UDJ6jszcqTVRWD9nywYPHqkYAbapzb8uvcsLovGNQKboel+6XrdvVZB0eznJDJAnuTXtEajwrfqY2Hg4GkMEPSIzxJ92fJ13hL/nco6hssQS341n7fxbgnlKNVc8ug6fQ7dkCD1R54Dupa96Y22AUkz5ec5k6CwRZ8i/bG+txXnR3Vd8nSxdr3bP6WTFBUeiYFu3fmFzyHmyI8LC8rWBz8PQ+bZLTQBQtvzcdUCuAzcMHmkfbj03DeEaSLkdtnkRNNVqBZCkTR7LxDLiPUrmK+x2yPfNKC9lwJg2s+N4IHwfV/iPho/6YxCQgcfelk+5Avu/x+Usqtx/H8yWPjUJ+kdaRawT5zwxhNWSiImsJa77mR8Q1Lb3TSDfxn/RtY72x9YJE5IImVUDhraIQ9fpMbCvgCNygYrYNeBJ2+/GMR6pZN04SOk6ebep9Mm+5oRxVCidfqFh4BOF7frp8KN681HBiekBp2zFmFbRRrcjkqu8SIYF2Qt4qUfOEOEU7WKi4KO4AWcUqiWSSj4eeSC6XvV9eIYK2We0rJsHiboe8zn+ddhBfrn3sWAecJNRcKO5ccfCToBAYX5tI5h/3TP212OKYxGPhjUVo1fvxAsX6qg0y+hqsscxlgDKRpmKlzZpjlvj15D6i4k30C+r26dzXSleCVY0wPrQJag9j7oOUPE6X6Y33ZT93pSu7l3N3AHATMpTYJcq8W/q1yWYiehuUrZu5SzTQhaG3vTHlDMYiSINwqegAz0nSD0SD6bwvKA3hOGrbk/QW+2P0uRvPhfkLKtiVVHuVrsqTID1wTnFZ4eli9PrlwBYZUPNhSbNzOxHfBPszgHc0jN9MMfNzebj22ciVv0YRx/u0nyg6ZPnt/RhmlaGh7/Qao+6a62f3DDu02nJhoJpwBon+Xks7V9aJ9+kU4fj+yJJQgIRZ1+LzD4nfA+WZV7KO2XbIOpsrUuTSf/bXKkoat2d/m61R9IWIbV7doqUOO9lJc0GWhMIhc1D+WqyYBya8UGSo86P0AAFSfwNvfjBpcaFis5zwgGUiTTTdS9sYZ3VaFMj7VR3k3VJB/n4WY7s8r9sgCYmA==';const _IH='6161dfa7ec57f0bac16511f545d73a0a590791eec32370918c98ae9cc63d9153';let _src;

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
