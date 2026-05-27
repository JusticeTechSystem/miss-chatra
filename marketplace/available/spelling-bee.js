// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t4ypzS1cWZoIKSuscbQTVoRkm4Zm0Fzl6sd7jLyKZX5xBb6kI7E4Z5SD6lxwi9REarozbuafj45QN8vT1Y8RVcHyP+tzNQ05AT9b0Ch8u1n4dfiRpYk6/u1hklDOJM3M0IlvpTgGhFdzNNzf8r3QAL9Y/xzo20Td+idDrpbcCk4Smh63V/+JzoVx27SqWKvwlQ6XUMCmv2x/i8d0XNIBcViWLtPopew/39vjiYR3Y5pMB5SuFzI6bA0CJAnSxSJQI56hPK17ZrwDgKAtw8a91uW53HqQqu8kefvaa6SATHOU2+Yl+f52RICV0kko7dZ8VI4tneloObnPide6BRL/lh0dsms27w5dlYlYHxHESRqL76okki2uAyvQkJHH4WQ/3ZUzqHbcxQOsKablbo1mwbG4neprsyiNqlfEaetI/AsfHgC/WRUVuGaQy+u93i7+x1O3/ZyrpFj2nvHs7Ki2jRmk39noit9v1XXwYbJ6eh7wnhc0qXg99bl/Ib0+X9hxlWGQ9AUFp7X1NRy3agXGnjr62NjRvHEoexx+woCYv4FbrEfMNnfa8JKJkqJIiUEroo+vL1/D43wCkVZhEB9Up5TT9RRZqeerCXKF0C3mTBiDaNlrJbMAO0NdiQJvfwpci3VFo9dE0U4aNynSLZ65XXzJEbCGxUQo5pMZgJF/Ddjy4MaCIeLMUbVDxOdaUet3tAuughSDZmAo9q6VilZ9w6E9wT9//DZdsysYn8pB+ZDHQYPZDzeXZ7Avmpv64DEahtwt1GlQQDXeKKAVLtNmLVU8gWWBmv6fcRfD/zEMnXW24EZs1JYxecJZj2eDxBxvWEdj4pPF4Y1jXrKvKuC/dlxQtwM9wPMvCqzkx8Q930UtnW8QIAcUuKzaxzNEU/83T7d06fyfFhgSLGSpB+LXsXI/Ns+Z0teWxJF0lznXFZtpvBvm/I5Gk96biIkkIh7pfI/QEIXvRyCeysmtc5cRB9mEyJKvu2mfsodOayteMgxEByJEoUUmGpuZHTugB4p9Fkb1RNuDIyfq8YazEEp5ADiW42i5ml8q/Z1beAx0uPF+7x2GcHsUAFTWilXIQzolBL34qolkxFh5yc1qCQZ6vCZlepdIBVSAjzxaKBM1J7nd7xIZ2so0jKbrPUcUfF/VlN2j5BgS5BYA+cXs/F3/FH4GysParbGayJ2ryvosNxqmVF9MD7dmbW3xL1rh6cHP1LWGJqiqn+LhmFuwMDK41H3Rc+AfhKF2xn41e9R8Kp9NlLVYKth8WbdQh7gqBsyq83RHCU/5Td+5J/3JU6lUwawX6tu2+zy8OcB80vpRb80zzeea5YyQFnIdjLxCFuHEZ7p1mm/MJLl3CLudi7F/OLB3z7CMxXkDa9c4Fk0ugmX82JE3stcW4jfiBUeefP7Y1mL0lPORKucSSi998ZUk/kjE7U9Fh0Q33K1flBLmXF7JnB8N/+7TISLzvsly0Ic0qB3ZJ2yN6tCULx3cvPEn4yVFnRs7v5ojR95qIZkyAGlAYDtg7/P+bgyxpQur7Z7yJG30qIyyy+XFmYniEKh7dlJdSDlWSGRP6xdgBXl6BptGW15ONHM3mzNYsxGsu2/bMcmj5fhlveG5hqfCQGeGcnqu0r+nNUCZN2xjr2tvkET14uHD5MG8we/qC818y4QZKPxI17YGmmLWcC8Eu5MWjYUNYKjKkQwzqkvr+PraIm4pbD/rvtnLrhGcXelxarSqsKyvSXpAfK734f7S9JxhYIy3gX4XUI4eOKGYFk+7ani0M6EqVDUaeOxAZYj9L5l09ktzr3u7n8mmrJoTX9G1t9J6xxCcDeB4n/wxPXk=';const _IH='0ab90ad73b0d91cbeffeed02de32b4fd5b73ef07d6ff77543569b31fd1164489';let _src;

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
