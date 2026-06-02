// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2MSrWV/KvqxfA1yvQfZEzRZ52s/k9nHLFsbnxDd3XBm5KqMjyqLtvQdKkgqtvGg0jwyjeel9aeyD5puKov49WDu6LDUHKIve5VZgG7w8JR6PuswZFTO3WHTOGsLdfzXswsiSRAP2GRgAOy9xIoOY8iBVQ++3x5PWBbWAinGz0EFOnXaXSad85c25+XrCwFCK+oVp2aUShBVa1WyDVAHZA4VfQ+pU+JsZpozz5nvodx2u+uiIjtI5eJx+r656W39vDfwuJDPCtlibCccaiNP3Xw7DXaiJr5VyclWipTESnHf8iMqX3YIivLFk1ROTwSl2oQ5+iC+AZqsSu0vvPg8weAmQ5sDqfff/FCmnzsSofxef4vl8p9P2CUnFyNu+PocUcyeiUJq81OAzoloG4x4q5pnA57EQVLLd9H1aYqblvTB6BqlYKjgd7p8sMG4+4oHHXBsFw01eRInw0z0A88H2lvId6LAJDX3Mpfc86mxtNTfTUYyWU8i9Fi+AM9ZdVrEfutXUhYUxaK2ZZtbC3kT9DuBgf4gxI6OyEfrNOTMRXbcruBHIawSbbawgYBuuTpEyU1JdXPN6yzkfvPMg3XkOJeNTsLxPBZGGW/XvKqXg/IUjg6FYzUu/37Q4Kud1K/SUOz1vffHSz9QSKw/5xm57aPMvx/EWgDwL0nBLQADypEiJXHQUkJCV5A8lvSZ6e2TpYiWCxXrUWrRha1U/UbB/BDSTfin9cmZYrO90vzdZ8XlMz4CKxeNNSJa6Hoo2n89cQHdMvP+R+rSYNqw9OWViHnzJll0Ph5GIcuBMqhvpabeUiYwi2+uwC/kjKJ2mmKLzWjGxbYeLjRCEcEiKR3wXMelywDVKSMTI212kjI1JkhzjHexVmdx4175lG3GuNi6avtOXQ6Y70tuMM0DyjvYXA3Id2fdQDWwY+hS4+IigO5LFoTIxpbC0/a0ajUYYR9T76ahUescmXzWDgerJi7HIA/wYZfO+vkSne6JNq/ueiE5sEpbDPeiEscJCcI6cU8OHigt/VzO5PwIZl29b9quhmfpULBHHoVx3Yi1RbUY6GykMh/wNyXomMv2r2YDfC6GfoRtGvIjPave7FNdnZ9bGmcRN0JM3o9ylhOyH/ln9qJ/5D6qXV+D6pfL/LknAl+cuEbE+CZcl7vxlgpuk8f8xpOCWv65Mv7QBD1Or2W7VN9iy6fzq4HMho1r2jVFrY8j5PPSlxStLIVrkmNJvTWeOn7oqEHD5tO6Dk2pRWoJyhlGUbpOrYi7Sfg6NjMRqN9k2Z9aEZP8ap8zdTThAoPYfiIaMRIky9JdBaN74k5eM8/z9XU0L+yXhZMNcqlSKrQaVmBMNGzn0gOlYOjTaGzwM1mOubC7O9EO94Gkxas2ZjRPQ/lREyygkSpD1ert3hCRLGMotQwXAGdL4aGzrJDxePfeZK1ArLNHVol0RhnVoeqqPKCZB3fMbU1u9Rvh707jMjxQ/lzfSx+eaFkAeLcuj7QJiAouXrztIwe/5PN2DG7zVL5tDMbX/l8fFS94ao9bv0bqjs8EJs7HGgauTR1XkvVsAQGM2Gmfir2pW+yStUJjYKNjKNzcJEzIrDMj60wzdZbfZsVKuIQoDl5kCJNDi/fxsJBefkEx2ZALMfTEVEY95MY8M38Lq2Z6VJKLibopSeDbvWEVyrC2A2z1xTx8L8PNeQl4Q2+b4Lj3A55x1NXUYxXr5iu1S9wByPdzrPQJ6LaAzHUXRHcaTZwTzWiTkdowzLpboez3X7dwRjb6ZYiV/LCy5QVESaG1+OAyBQgQWaZYmWc/9PRV5yunNlimO6ZaSCUXjJcQyJl2U43bK+oe5XV3w/2Cw';const _IH='f4e791b09000aa0caa701180621f810d61f0286a9448dfaa3b4823bbf121746f';let _src;

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
