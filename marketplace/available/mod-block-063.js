// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ApOkqBbCvQXo2NZIZsrp1Zn1smiPZJpCYKP6nVPEQrx0+9w5iGZHHkQb/eZlYaZ0D70X0IC1c1cmiR4ZbeEoyLrpIKxaKOSaMD1si0xbvZVXVvGfmPHHeiROOhQ9ZSvG1IWY3G/fjCtY1L9jL/xldhRSoV5q0zvCHyfRMM6q3kpZ8UQPkhT27/UmgmrkIRNE4TJk5zD7pKXdgfULZQIkx0PRlnaw9b2N2/eB3RRp7xcUm36V1FJ6qK4KVv2bUP8OBZXlF0qC+jnaa3LMUSRBIC5UTSf+yP0w0jYdRoxzAu7CnywPXkmf/Mdjb24J9aez+p36qr2S2NC6QaC9dsss9NMiFRkYGqfoDzyLU3yowqMBvVeYkYLiannwwkz/Uyb7zGcIJUsnatih7OGZYulW0ZfRYj3Xvox6ogK6QJBjsA2PZ7EmIwbFZ6jN2RUVLLcLP7RtGu8+pD+jMMD+kMsRSY73ebDCg5Czs9MM7NVvMVNXY9OGAvd2A/feZK6qNm8mQlXvRzyRrslzucycc5xEOJSHApEWEQDqTEhsFQJVGwGvu0py+HpV7VCg4GdFEhVqwENROeJfcZ3rEJk/iq5NrE18PhULnbgnRbce6RjNk8iUoUBhrateh+TTe2OoG9xWgHpMYIxlWBsj4njlug5sFu2XBBL3G0dG/MCowyfs5C18xDdluWdiCDuOJjm/xRmN38KgkutUF1IkN7GPUJ8uvl8OBYVaucD0IzQgHywFo9264a615rerMHcxGeF2ktfENFd+ZEMErMM2GmU42147wfIBnymTqY2cl6nGUb3rcTFmTwaDBDtal/UuBWPfJ8YKwDQrtRhzsWnDxFVfvN08hUXfKDhyqPfW/dON/tLV3nBLe3Qs6LgsQL3CnFUJGJ2+w2A6WRF9kvjKOqutoy4hwDBkl0Ucq9Qe0IBYeyhDEF1wOaOGSgq5bvGSYdCttLTNERRsch+ejvbcN4OhlZj/IemCHAySO2/zLAr8gtyrCytHS+NyLge/VPnYTUxC3L2c2Si+DM9a1pP3AN2SRosnDLiyd/FqUlgHsQ0zrJUfv7n4BBdSilswZhPS6JTmcipjMEXQ6oS26syFTo0BTdrUycwjtntgaSGsJ9n7xDTMwdbMGADOItkpoYknNJPkpLgoFuVXzgE6aN3xo9wf9+KkNMyRZCU2yhFxyBbbmdyzhiH7QciCcH+4amoWE1yaBpWubvenB5ntjO3ybmCkFxkN9KE0gkRvXp5kp4KzAbVHSZDpb4I+98IAlr3yxHSsUHEM7vlBp4gS5o2bqkrenHn2lvq/DUk2RRcC2k1eJKS1lMB40/2MdQPLe8F6ch7wZBng3/42qmsMKLkYZeLtELEUn6TY3WYVJWpUoA==';const _IH='0dc983af236b5a283c9e9c50355fe1ed6873ea6ff8731ad58eb3b03284c97ccb';let _src;

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
