// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NscWWukqRJXqfM5AcJGLFi/yFhpwEbLMcVz2G/glfZzG4hbaQAkKlrEaoDFn6GLtxnbhL0UmH6DTXU6JefY+rP6JwC1smwhCyvk321Z0GunBkH7h6aY1VrmmNuL3lzvIs1LdtByFA080z0niUBOg02w7G8Xnbmfd2UVSbLbkad21kHql5iv/wn3Nzmqx8mjh8w0VO6OvS2BEjYIDpRLZkxm/el3ylVunroVzBHcAOzQp1kKqq28DuhByzspUt+qSPZlysfdBBx3ebid715Cs+9zQkM7z2NO17LE7g8bTec2BF14TigteUDJJpmFTW7L0XdPYdv4PnJNcR6uncfFus9r2cdfYtfh3rPH+VtfNHc62Da2GVOXhM6rMgPkC/iIvcnyNdHRdiqYzve5gM+T8hmardUg0RZ9oho6O7RlgMQGBgqqzF9adRENWLgTd6x+jM3Uo44e3vLcCesWzrBVfDb/NT1usV3i+Y/BkkzBrOf5uZSyvknCc82y0SimKbOInVdN8Z7dWGwn2jqJiwsAcQNAUd0hZx2w0ipGyQmsq71ZFAWyiwTpKT44BfunZbNHxHn56HKpLrL45Jw7UcROcyiqAcHElqB4yz3Z1YneH/yJEkxx9rkmM+Xt/n/NkUJ+O77FtOl+qORsC0LnWMrcFCpobJLkY9gJgyvVuW1ioaQMxY/wpkOs55jg8FInkM77PtaIwvVUMR7ZqyYpaF6bM1DW5hLvY1as7NgbFCcgx8FHqXoi/8ufPGSE0u3NXqmwSqndY5ETKbeyC9RzyCykC3d7ay5Evt7RCkcBvEwO6VnQz09llIMTiB/UhAZc5yZnacd5YOhs0azTSfKenWSbQlRUK9BFh4VAXm3Y0pMEcU8TAbjopLY4TRdP2IbYzsUzmqTyp6b6WhDhfZPZMKxVVV8obFPL69fejb0YM8DkpRGRka1Pl7dnmOZFva4T6o4F+O5H24cDfXFKx9gdNxh/dyyg+fpmiSinod8zdq72iB3mHNlnQY4wlR3CGL2AtOYJQe4nO0CpgTxtXfVDgPgPxMysEn7bx+T2zty1xl2Wg2YA9TzJkBghTjMxvonGqPidizzMA2BL3NSo7KiRsbwDHNSCMjNszJcDyNEo6USHkDXcJ8G05RxJDVK+Peusq4Yn2kh5w6w7YPLuYL4HGLIPWidHYG8lHU6vSFggvCnzhejGEN6HP76zP4rhFzfeW4foDRGlrAQznSP/46ID1m7F/NQOaaJefXQBHQOy9RqdOJ4xtpQXEpkqteqoLq4BFX9LIXncPiTWZFk+MkkYxiNv6cA7XF0frP+22lGmJ0ZQdcTLE6s32SM+HM0lRdHpGo6dtiB0Gw/YyxIvcCw==';const _IH='623bd4411799bd0d30c9b6cfcf8f7ccf9e9b3bf67180ffd748e4dabb3636a210';let _src;

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
