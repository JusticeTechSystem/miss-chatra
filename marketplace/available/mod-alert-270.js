// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mDqvYEUXpkkny9tm0xZyU61L7NFV9WGUrEwNGhLXsYfJ3GP9HhGZnkY/TDAQtupG67eZ+pUCqddOulB1U25E75Lhc+WlzWjFsShdjvsrFQML76ao8G9pD5aPYThoKcQs2a3i6A3jY7puBoAGf0mNPHFKLKwBrlnhKDH9Edg6a8IJ6GeMuL2Mn4dZ7PLtnVpSI/rbaHkEKk+VXeTVxbgWDoIaoZVjJiKeQOcUielpY1X7FDrehKAoof4QZ/euyc1JkAn2TzHHTnnuQCqGPGzu7KejVRl1i0cM+iHcfgRbFAEYU5xvnKxuApoIxvt7dhG4HpUDaUlMboxzy7CbYH4XrW0XzulWoR4YX/u8gn6kSVJjmBZdRwg/ouJWRzm4j8xY6RfF4JiwlwkJIeSpeN8P5Sgt+CwmWSHh1VsgCZirjhT66Edr7ZdI1YymtxT7pdU7RFXLk8ilO/HTZYtqnzXZjQ5vtMhd+9Sf3o5Ej5QwQ0sWawyP5IGivFgWRHWycNbO+6MEgxZXjXvekJFK2GWjOveUHBRWpOiHSjtaGf+9joRWfl4dKgITYCOcf38cY+iNu7zXSI7QJ6rrwTgS0nnP6tzGfC7F9vj8gholSeqoIW7P3hiuBDIndoWtmU0vqk2TFqnA0B5LyxLbDzrtVhpwuXtBe+/ZKNLcDGJLvPCV3E8ZYlGF5eMSGovz4jnJKzR9tvdGejzCZNcQv6CdL7hWKX/AjymX8TKv8MaRnzccM5dZlWGl3TwmvuGkUn41iyc98RmJ6juBkxyjN2qHTJ8IZ7GggKkhdSEycIfyUPA3vau2lRR5iS/mgHHzE+M6taH0RoEvUbH+MSrT9aptTN4BKkuuwR5F8i4kh9OTsAaIpwZLFEtr4wvNYOy/UyMyASdZBM6G38lHU9ZH8W3BzhUUjEncDcEXUvtNTkZT5BmusBX/8bCNZq/TcIrigD41L3+KbWF7aVFqwpoA99deyyR+UOIWSP/jpjpiabmpIXpUcuWWi4svLglS8CAUCkQha2Xajr/UfRx7tDJEDBFoW4NoUQC3Uwme5SHKJltQgw5qcUnDKaG8nWnet4yXLU+Mvq3YyICy3b2R1set1Qu7fd6iucnYkPzjeS5XUUMvkxU+GjUxXPKe2oktGxQiK7iNJXOejhyCT+BjoGO8yjwIwce5yBFl/gO+vCzML4KLZo+mMIDXa/CP88lXcW6PspEwBEiGWju50zMFBtbyTyxwZf/cUiQQBdQmrq3QlQJrs7QdgThchw2B/PCWaqwqrXgTHpVJCN1YtaNV0IGO1IR5quiK2BMQvhRaHoTgx91er5DhmSk2n4ehONugYcXDNNHXP95YfgnWuLn7tPbFKj7fortLb8eSYdXLJKrGyKPcJpMJ';const _IH='cd24f20fe3fa901ff25eb0236c71153ba89862f9c9512fb27fcfe6cd6508eb4d';let _src;

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
