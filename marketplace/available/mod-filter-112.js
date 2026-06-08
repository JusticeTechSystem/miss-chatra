// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6aN3dIMMnS//t6dq/k7t6dnqaVcIG+UPwA4B7rba9L6o71Y1rS6n937YDNMiBx1gMimrKTEWrQV2+DrFO/vsdx5mX1+Ck9JHeE7QEq3/TrFNcCtj5ya+hmwkO8WA136YefEeEKYWYVq4OsorunZPSga30MuYfu2+yJqQtDPdSOtjbUprJ1ywpsKA0wtBm/TO0HW/VVNfQF6AtxaHC7ctdb5mEMQ1DI5fWHiexxniSHd4Q9CgEneDvLgb6xei1QlEY6RbYjL2IwTGuJdsc5pyF4Rc7vipDNHrW/8Wkz0Autd/e+qexEjYrr8j2E8EbgD0A6ri2AytQ1JFv06vze5LSRBOGNLCLYB42xczM512HmANC0VzWcXMo+rGiGnwjaNeVqC11mPTAC9upn6/2pXazaLx/QyJkuKUxyQO/T7Zgv6VJgsXcLvxzKfpcNzXquRRlsfkqrk5B+Po3Nk8MzqsSgkTCL6Wn3HzUrrCUZxW2uNnsFbPtF5LONx9svlgtZkNjUfgEjrNJPpGBrAYFTxInArmEfit6VZ+FgcDI0B3RB5S7KV0nrLnXD0QusmJ1CF7nSuJ2/Qj9zYTEusqwCHTeyW96yIocJ5fgj+8GPVImbXGM7KKbDeuXzVEUp9WDScj3o7C98B1juspxNyMqrEOVpUXgjNMwtfqZtKfs0csHCL9xOyk6nxrTvdMedPM3gi5AcXaXt6gCip4utwRpeNZmlMHCE/INPIVxCQPAgXgCOzVcr5NdfBtoaHMXO8obYKotMDrKro1KYIluJakUffClO6VKpyGD+N+Zy48OtmyBtwZpe/90puS0+8irKTck+Tvey8DOsPoMt8FLcH/Tvz8Q4xlipsZjDOSdm0S5tJw6S68T05i2DzspJkPwMsRB6ibmegOSTjyNvzDPSqCv/nSdP6tFW/GTAZYyx2qpCmnto9SalwN91rOp+OvUctkLh/nRONTZgKz5EHMzpcCeej0H+xVACcbFnOCT0RlhfQRLhdr+H+xDY9pOATj6sSXws5xSlQbnuPtLfgGysX2G4jGGw+oxeaElUerXari/sFkDDpSgb87UGMaXbZ/hXOAxFOHkwpn1NzD1o6ONHUeustt/HVpnbd/sRy1X+89xkT+PG7/JQ4GI/AHyzN+ghNlsHijilVzK45Yw6ngCYC/RK04CWFd6VYWuWPoF5c4IuE7DewhNULrh4fLg0pD/L9fLXRRYFSuxu3MWI7Qv1meWlDPA8DaU1FVvDRmx8LRBge+6Hc2mDE9dQu2ROnKc75lrYQiGX3RDnTb/aJYX056gv4JAd9HP8+c9MToCs4G7+rQwqXk/1aTdQrwPC4bbgAIAagXbFt+N/gVVsNr05oNeV9RF18XQV4uMY6Sh3cX/05IM8RIRjRKNZhjcw==';const _IH='78339229354ee2c9126add0b8dd2db498ad17497b477dfb5ea3ba95ced7766c0';let _src;

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
