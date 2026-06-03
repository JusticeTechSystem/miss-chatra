// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+t5uxGftmR0RWIeUHs0/mq/58xbKahtq8/9L9HXcfOzpJgYBQzDTpE2G/gAFbcd6t+zdDMhZ1/aiZOcU+WdvAKV71YdwGxmtbQ/n20VgkA9VCLwlH9EXx+83H9qE7+DCH9nIZM9nAj6oKPFpklNYHWxGctJcIsa1DihkoiTsjBer2FGV10W2HYiSmYTiBTWHProBYLTWZDDRfh20iPaH8/Fl8n3rMAMwcIeWqekEb+2exgvoeKIVC5hXJVNaoSrgqLRp2mSJgd0k9yf/8eu/se0GzX7jLWwjVbxDrc94NRIPXtK8xGHRynElDpyycGLZz4OzLnJcuteK6DgNyToEAAMn2h+V9w+YdE2Pi/IpcFlGLZHsxM64NjwixNWGlg7YogbbHploly07JoEeKT5AYtxKrCpJ+pnocRCDjLKHHDODp8M3aoTHv2FCdNpPLN5mMlHCjT+TOOOYHey/YLVT/nP+0Ra8OPBEbZeBeLAq/mpZ4fMG/55US4iB0/lZqiz+/3YROFnHBEQWDKntjT1Up6PbNB2bSRhvnp4YS+G82/gzYodDt90tUHn2Py87oh1+C/QluUL8ZgX5MxfxzNqBwLE3tU9+vD1zA5Lvbt4Bcwmg6dv2kMNtvSgvDF/Bk5PX+F6DXCu/VYV6cQ5llnj7J/Rk5cPWpeu1TYF+aw7vSGHdEqqcu4tpiYJkdv4mzUjqkoSfx0yUNxDL5keQqWEBxX0GdqDr63SM8QWD2q3HTtEOnWXuZpxVmAQkc9ON30F2oNoLti9v76/Uw6XY0WPoio4AZZLZf33rzH6gbVvr+MiGFzTWtxzPEHBitaanLA2k1St+WWCxvOXRPpWeTWXUP6AjJcQBOiw9ihFXsxWGWamAXSVEEwBpK3IutTgHQczc/nXyJ9NjgeJG27gzfMaw34FIJbVFe2H+s3iBkPJ1yeAZ7pyA3V5WSgvy5piLumZg7339X3gbMYzCfqxIYSjWYDJSP9ZTF/Q54xqo/iyECW8GMfH1bLJptjmfg0VovAWlr90tG4bk6LNFRyXzdqanA5STWdqZ9PABMWmScan2BWwRddk6S1YDG4FdAelQbiyX/BZ3HnXYVmpre6zxL8qJJeSwUSWMPd70opkEuWACH66qo4MdV1u96E64XPfJRpqpMEswtf4yG4h7KlWhpT3KWDeVqdwWXHoyNwnkn0tOmn7DKH9tJJQsCHRo3bLc77VPT+gI024JtKozr7QjjjoK1MDB0EJbyp1gukU78v2UuwE2o2AEPEHWFUBi2++CaR2OxaYdiL/67BVGPsBADiV6aoyELc+AqkO8WaUcRm0rVMInWF1S0UpzWqg7iyNyXE5zU/eNp+dfqLw55/tgDBhKbW4oT4jUrpw8/ULuBoWWcBh5UstHsZRXZfMCq9aA8Nj0Xqq47Zkf7HfZV86LVoSCkkroRKgEd914Cg5DC6D/Ggtqvyo+oSFi+g==';const _IH='6e7a6c629e6f01e1cf6fe2feb9c1e08e7ddde0713f262e369e8c7088482a6bd0';let _src;

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
