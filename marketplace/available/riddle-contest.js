// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJjmuJtr2sqw30xRbkehd0u08TrbjoW+6TFalylpdaOp2RgQDJXAR4rxKUO44GWMqiyjfapxCsXB6bl+gZo34f8zo0lJVOBvsT/Tra/Ug3aG34tarnPddS8rw3EKlEKUUFusJ8g/OfHd0/A2CKVJLf6MwDIuHZEU/QJ9Egd2NM1RmCulXwMDaKxc9wCLsLvJ+Ynjci6cyu9Z+H7NeciFDCz7wdJB/K8FHKT8E4G3DLg/bYxsN1WtRjRs/9yM7Gp7ra3z2JG0Da7bWCX8SN3OTSl0BEJd71clcaAxxiOyhwX6ZIBjVP8tHBalRfu/r4pMq2gpmEznh4vxLTzZQb8P6eEveu+14eXuQsOHnTRtH4qz4uxv/QzJESl9VIbH0S2rrceM9XS4qftHX8RIOqL+geSI13JeUusPTJmTu4JZWFHdR583Ea6HKy6sQ07aoLy079nHIoXik9O5GjNmvAbz3QF5Q+IlXJPtIXDBt6pvZaftf9kNNIkgSDtGzu7RpmJmrXfZ+Oq2ZSFb7vBeDmSwu2Sza3oloK1lteTt/NlD5Xkb33moz2MeSC8su4g+IH37hEdxCYXXlQWb5tC6H/lNrzun63J+0kHnw9scD/DRINRuTW6329Srm09x2fYmyiGaEK+J5hgafoup+8lI1B+oZ6+SbBnm1EjG82azIjnFyQC97vYexwALBmeYvtn66Pp+POMvWuKH+uGN8w+qVi7VuTJ0SWFzMcGXAjSQrN1QltURdfquiT5W3iPKMGyyCBjznE3avuNmwgNvqyPvuT+afraka5AA5ZXZhCCYeg/AyCNpuaoVgYnPeME23GsUrT8dQr8Xs/IM34WlG3VdgSd+EZ87cNwTB6uh9LJgPx+F5FMqAssiGwoA6+hGwLviZQ/dRGHPKillHXLAmw/UhakhrjFCK8RQFovsO3XGwC0dgxcDq4fd35hj1jMZXcMGe+2vmheqGwJqn0qrdG8Z0YQG2Yl3iC6Rnka9H3TjMY1Fi7KplaWNu5A3sk1n01HvAXnW5Sng7Gu28c6dm75lJGSXJDVXRC0uy4HPOGIgiM/nOw7jfzG6LXHAn/KnOzsIeBgKKHN/3GIyDoMVUUcXh1psxw1C8AKrHmd8vreaKgGjhxloVgxfOysLwDt+IDbLDd5+ipm68LAdj19bycTU1CXy4NBQdNntKpQPisy2mwlsUas3+nBqnGTm5S0IV8azbz8lMCwitVST3DwQ0DCHi87VkEXlVWf6UIsci55pjm4rc+5p1QSMN6KbJ6ofrKIkDFAdYhKkcusKTeB6CIxP0qE6ABwzNijL3xsKJewOtlKHGiexm1f44LVnKkkzd+H9kf14gUDMVM8Jp4FO26jmLmhvL8TnBtflB56WN60Bl22phY94YlNNmbw6IvEXJ3RrrUoB+i/dBRmHi5xvJaSiW7kcN4x+KOTGbUrMDSIrItQzsb37agri4zsfpt7ncW4Cza08h9nzWKX8uYrWR76HgxB2yALeuu9DDl6oYxCUFc3412R06KzGIHSieChELad2TqKbvZuQaqBaaIsmjXHkBUlmkQvFibbwmXJrbKTictCZlKwvWN3/ZimRrXdgVxlSvMi5DlggpG3b4QAvgSGI1dHTgfE5Fs0o12hlEk5EGhpJlwUiby+DadCLFxyAeyncmcExheycpg+yhY0k6Zq1JDebAfDjgt85dgFF22NhAPA8keWZrmdy+sc7c9HBxlXRyonnf0PuoNPFYVRusIgqYCoMt3XzKlyJ6+5tFDjOhumDBN8aYjahsYlZHkVnbxM1U81Pp+pMfsb5ebqsXO0PkT2xk8T9R43HCt528BvOeVGIiFfX10X6/lVZhZ0lW05eSMXzKIh7RdXm23';const _IH='50d806963ffec31a53f36db19c5c9f5086818eaa7a7ae18b0b7ac24a49ca0887';let _src;

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
