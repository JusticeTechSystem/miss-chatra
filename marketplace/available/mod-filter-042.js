// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8QmOi36JHYCMq22l5IXVTHTmDDyag8WmSKF+HgneClxn60pzTwOcZ1EmTmDeN6FrvF4yb8MBFnLhrHSbAY2N2Ss/CnwKJlF9SaVzcgZ7F66lAv6YfzbmJ8AROn0w3lpbpLnOUn5pyt9l5yxwqamgn5OV5wZ6tUO6DB7PwRfyesWp29y0WXyHJG3Kltvof8a4mDmAsQygM+MFsLy++c32HL5vJTprMykhcXSCXjR/wB/phoF7D0F1sweOfaYHj+yLHZbD3BYNtTUfuor89AIP4P6G5tH7R3tHSE9ExdnrT40o4dcU27hH/Xq9ftJoXMahna39ljp/YJqv1WH/Hap8Vc+qgYoqtFycDn8OM1IBFZaziYhknl2y0SKT91F9LYYDSwvTwXh+nU0g218xtsoFR5l94Deacr/lbGWyATOHoJU59tD7xGY3IzIpX/A5SmQ7IkMs1cbpem6MNEgNzE9t0rGWgGG5HtHULocrkD5kV6U2RU90wg9QW4MTkC57K3AU41YDHLWn1k9cSVkb+NtO5G6BrmjMTGp4tXtbszsePCP6ItUa/t3+99m5vXNy2Rwn20B7SXuxKXNk0cDw5woAfRgndyqv0heNyAPswsbWCdrnn2UArldBmvq04eruN/8ifLylurSKHFzBMcSHOLXHKty7p9B9rJY5Ph/2X/IECzkPeQshydX0kUVb48QTcHLpx6AwwVqarhEX4WyFTTwfVw7T6c0V9fJc7W6rkGGJgzHMSmiRmEuf6BwQvYIouDFn2ANA8DeMO6l+gCkvxr8v0XjtD05fqRs/3QkwyQOgGI/YEqXe1jPcePz1UCF1Y3hgwdOYcd9igGPxRgc4yxgfGtWVnJ80tpSiAt3T2htq7lLOZChFhzeriCF3okrSn6t+Gsp9Dh9lz890droFZ2woOjCum+ogfyXDNygZLcAZmmkCtEXRmlixr+ZtzdNkEPOcwcvb6L/jZRKO8Ls3K+eQ4gcPboclQ/gB9dA64IsCa6g9LpYN/jqzmIFxEZKGRHGuX20G0iJZCQyR9TgPn+lv4XfNnq6DsPYdPYFKDloc9js6e0AHiqjVkSlqCJteR0/KhM3wdk8vY8kUhSX/Gymq7QK2efCH8mNOmngdbc3gkd2214MdnobUhji1yY1wCV8dyPtNx2VNjiuPD7YAUZcFNeEBJEXwjI4iYC4M4dPQ61+NLXuktgM4GzURQTX+fr3zDAIcsblFZl8tkGdQmeBUWScTfVPYI8caUq4/4QqTAg8I+50gV/xYWR+hqgIPkGRc9x3RnDZyj1+7C6+h9Vz9DjZLIM9R46Q3ofkWfBeBiBRffJ11z7swCfszRu5kS/YBL1PBa1B7Bs/YoIslHrm52STMb4ukbd6kbg+yUzmyld4j25Q==';const _IH='604a69ca8348e17f86747a5424d9157c28e89bfe3720a488976f8f3734571a7c';let _src;

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
