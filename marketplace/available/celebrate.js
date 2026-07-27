// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCU0ilIalW5TUP/YY/ET0TJOF38DXEsJLQcyAoeuErX/2wCI3O5NI6eNynVQ7MtoTriZcF3aDsAvQoT+WYSm37F5VUiZoW1+tHhASEnYOYIywsCmJqgZqz7aEL2CVcdLmKSeOs5e78x8d9IaowjCDvp7r4H9PmzomW6yND0arv2NYkbgVmmj1/K+2EbhSAHr9EIzRnxSXqXIsh1xuWRVXzwzXm9QX1h2bA2W8dItStpQWvHrcMy92s7WCCvLAb+3APpJXiKPNpKliL2x4wJsmo316snwnqLVjOH+dut9zfW91ZxwM9WFUjrshDd07g5WhfPBZ+r85YBRteIEa3RrQlI5nWXbevgOrCPeORS7h5WiErf9D9qIK4F5+ZBieB+iZ8apXjzc5tBtp/iIjqP+D4sTbYqV73UAzqSFQz3vbCWjexcJFSLSnKDuMgL7vOPLVdoBW0Z3OEb1bbFiyIht+IpSBQhTFt0YY+UPaUs0AWTxAmqjnjt7+r3f0EfYB00K6ghhT91LcavVma/VwplkuFkc5vKWhSweOfwA4t4Dj6LYaYJhACkPTQT4sEgkVQnJ/n1qNiKcR8hDzr3hPbKTf0/gPXVAGYXB878L6nWvWNPva3E9XRbAat+YZ/Foz0iFi7C40eFEofc27jLP2hDC1LqsFBYgWd/Gy19LUo0ZtHUNuwue/zqa4ykeijuDqnldotyqU33lf4ecnsQvsMURDqEKLSxr7Up9j+DbWgLOZUnLFGh1JzG59xu8Wg6nlPkuOTkwpKgrU3tHjsAuHxg72KzhejCr6Su6Ru2BgclH3OewLIIMxjfdQxYtf6D/6lz7HFYqs6DOp/+sjL1odoto4yB7WAUFiYM4uz4kyake51uHXAtkGco6TZSm0p61xPWVkb1jOYUIDTu5wUJSPohK9sQuSKdmd2rclLmBYqpdjJYkWXBdOrfggWjAhDHaPLPD3ucGlGfPpRH3ppnxdA57cAA7TsnszrtUMT912kb9G2ZZlscX5YpEkEbsP1/7TFs4iAAX6IMNkpbmWDFVmfuh8jjcoKHTQQTu7ge0Zg8y4XGCn4reP3Nzua9eNXQ3Z1eHkvOoHzaluXd2ViPMk/hrPDGpFFR+TxmVmgraNB9gUNhmXXpO+VxHKndksJhEob2D7Fve2QJm4ZhRFgmwojFD3oniWN6zg8pVbI0q9grVmf75Pk8lwWt8L7fw==';const _IH='2106729a419cb9b7bd6342959932aada10c1f49ddfcdd3ae93ae739561c8f8e4';let _src;

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
