// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ute7neLl27+K7FsDZN8Gkf/PjcyghyC5MY8w9vigiwIsRwbi0AV6GZabIqAVlD2fC9i7Nu7AHZ70j0B3SVMINsDI8c9nmmm2wvCHrE5jpt+IWOQrf/stAgsVOXpH34/l8GQzSVFCHEAm7BuRy4QLWybS964RnqBtV6KSHYkF+gCs6Jv4Cj8EJOnrPiWoEmXpGKUeczJJ3hWzC/e1YzhfSY/bBTixInats4PXkDgoNyuVVygLfC/rZLFKPdinBmU5feXW5wWflwCKuImvJxWo3O0e3b7M9srzAo61Nw7QfPEY+lD1nnAqxKttXHFVc1nhnIZawTeaOzSVue2ICoh6CRBAOvR150eknC+jqvuvhfp2F/WqzpxMIvh5ae3xFxrza+tRUx48WLLCFwmgrV5umg0ql4SL5vgmlhzZPqm9pVwmHKpJQ2ULElMKq8XvkyUxCQo2LJpW6aDjLArUlpHdkm2U1foE2PkbEyMCqvTbPv4XT6/I8VgOwU1VTflrohDrRTkZvhkzzxs3b/XIkmV3mrjfbCWAsnQl7mFfX4kYi7Bt0LUud2QOJvT6YPK7l2hqSgthpYmbW5augUCxfkg1d1zAk9WKxtJpvMM6Bv5ZzveSkVkfM546CUx2l7PjSuh/dp465xQKnp0NfVTWqjyPMWEKeN/6TpxDpgmt/a38SwvR4CPHZ9+9RobnW6aFp8WSnU8MsY4DBXwRi4TzcqTbwbpDp7iMO7Z0U/d11Hwt0UXL6rznl0xVW3GvH0oBnbrZuI/RTj5zN3GT2rOSnr8JxED2ty4GjsDQtQi5dCtAgEADt6DjNQWVzXZF1rsSbBn+6taNUJbame3uz6b9qZawH7OYF3KIVVnulv/di3daOOronlMleBtwm5EWVj1XzuY074pUf8LzxYgjy/azj7Cj4SPFI5TdPInVivugTBeFquwUdE5vGgMfCI9rmHWm45Bw/w/5t0McWzC7zRt5swAKdBZgsK/fuQN466Hscbmzqasw+mN5NidkY6N8UNayGqY+XSYtTXasF72sBDf8BnPJyxGdAY7KXQsHy1OdBvn6Rxl6u6twE41Hj3yL7vwkWJmourNHq6qclMsPbakO5q/tXppr7xZn4k+SoZ3WQwhYWh2TmwcF9R8xoRGyubuGTPkrMO+JBaqO3LPhrZ411CuaHuyS97W9u4/2WlS3KmwHq1VgVUA06OejBq/pYA3JK/BgyS4Rsf4jXst1NLtG0UCXWvVj+/BI0LpnrF1SMkaYg3RhWGOjhEGzQSSHc9rebDbIGh0MPzvK+ZWt+rKurXPPGvSbUvx1TJg/EoZkcPKgP8UGA/Wl2IZ6nNBHU3Xjqwx2t3E3Yb8iIMfQ6IxKet7Sz33cxJJHuu+VHjSQjU2w==';const _IH='4ed36e67b69d5c19fb2d8abe48f5a72e15a7c163f67468009b9c5951091bc23a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
