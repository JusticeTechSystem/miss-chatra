// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='017OKr+n8cnBtH6wDuUIHxtFE9MVYIATq+Q2k+Kq3zRaGKcagRXRusRZNje2/oeh6JHuHPxo00knH/ieKV6TkWaIBthG6mURv4pBI5+GlECc9h3FLCqFerIaVDXiotwWQZSSyUtIIqjRfpLMvvY8Ms8a3laawyWmSrmXweL69SgFe+cIs/f7QfdYdXjodMSl9flvDLgB+wz3pCUoU0Mfsqq5/xmIKjWIWWnPWdCeTgQeRy4e5khDac/VmhVfxgooY5qi1o3sP4q3lEoZ5A67P0qKifJP+X5HmFDjnUMXOKehnpc9NRAgLpDx1f6PthEZIHO/eIQlasjE4lT4JklwUnWwhtU4emWnF/slDR2aDai8jbn6qEYlEWyO7AoCdfwsaSWxkA3Sr7k9xvIvBJWXG2AFAvip27i0LVB7ui+gF6LTjFfyOlMMbot92U58Whzmxkzbi1M1SUqD4GwvnSCLXQq7yxXCeLS+ijAZ7NsQ3uYERg34UY/cb6SweKVuYdneFrsy+/478jhYd16dKcOR6ZbrCax6mGXZ3T8h9z0rK7ZB8FzWE7EqLCReima5Hz2cGwf64lMZNI7uDbyt+sikiS3SvKFjSfxvLbRh50EMol7paXMvpFcw0f6toIl37iXe9Mk5AEmZjip22SigZQDO49My/1qNufUL+2pD/XBxjcVFzfhqh43nQoj45jbObZDasSYjHUcESVc/a3WJmjX7HXMrECPFJDpL4YnbHVZj+5NXCZnxgU/3dueemUPZ8za29p3YKkNEwKiwdOdZGxZGCwv7VCjmr15DLhIofyiqU8zVe0TZoUAkAD3WIqXtjAxZq2IEHIG649IWNeorKholCA9lK2yWcCDtqNgtpXxx0P3konn8ODjT8f3nE5qcEBkPoBHZeQMScy3LNG3LuNb3eY1QAH6NGjmz0vwbjzCY/TW9s6uhgCdOAsrGhLCbcKIZshlgpl3PPXz0BojeyBdRT7D5Acf+WE2Lo/dF1FRnu8ev35ktbahvUCyKFwWSxkV26w==';const _IH='7fa692205dfdd1b67930e1c02218be464fb8ae81e23fa1cdd64e8a92dcf3dbb3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
