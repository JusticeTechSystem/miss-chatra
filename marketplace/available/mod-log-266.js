// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdy2PBwqZR14bz8xF7dGCvBayibZgWEUKx0slyf9d5URLQugJlOjxjfTwby9ZPRvQyaY6Qxg5B4/oA1Xq131HL9PODXFeE5vMcDZ16LCDIZ856ehSZ269IgC9B5qur/a8y6drMb/CPPrucc5XU4ppfCKGGoQk9/3MALusxvxlu3haw/PCt/X6ITDX9t+xwSUImhpaM+kG9JmzYx4zV7RqwbbD3HwKBc18pjeymtBwMUKjZbSIVAPc+TL91B3Jt8JHT5arwTcFCSdM6zt5ytBwqZRgeROz+ZfqAhiZmmcOdncWif8CoH603l4w0Nzi6Blncui52k6g69ghKciK1pa/gNSroW3UxfLnYIRUT8/HEXw90VI1ioufPwKr/iqGyhP4Q0jE3ZLFBV8z0WYzZVnElTfmprBWH0NXIptiotEuqyPvue8oA+Fm6x/c04X8CDRC+PrIPZHir6wdaGgSahiGd0gUkKxICt1U4xNsZM5tSKXghZKtihSQOCav9tfx9+kAIIcCANEeZKR4ktgnOivAQUlGY3b8pwO8AbsKAxUv6b8+U7qp5J+0H/McgLDw9zOb3NWaFBTlQXKTIFbBMGwCSbb+5t/vu5bZ11pxp/2tefXOSM42UGgMHID8YyZQexiGrMyVPS8zNiRICt7T5b1OjxEWtPMR76S2G58GsACMBu9tEsJXjVEXRpUgLH9S3HLVbojLihdRmTtwBwSI6P1buudU1ywvxZbj2pxpgG/1C3BTJkk3hWxl4tG3NbsO6MoV3bnslb92Vn9XUOSiNPT8TTwc63gUMVGsQA+iSiM4+aqoaTfGpq/pOFqWgLbhhhpTecRkqQc9uuC3w9PXs5J9MIgmMO1NFElKe4k3MoctfGEWktp5H04e8/+uPImwNqoFmZJE/BMmBkVyvA295pBUhPalvUbusU0Lc3ydTsJZ0OXoDlOLSFoqKSfpK6u5yqyvGcH20L0sHifL1GDB7AMdy+VhGODV6qlz5DUUxlOPWD73CLU4Jm7XZ2mwEAgwg0gKE5UvFGGW5KKdma4HLVsF7CF66xl990c8IzrgW6+xTBlE8n8WQ0eXLlPz5MZ+j4/nVqHhCfoC3652nHO6tUJvubv8x6zZtlEg8hJIquo0v6+JDBHp8hnGLSjmWlnX+OrH3xPxiaST2DhZ62OueDnu6gH0qdEWq5KIGJjg+t16YTZYKXytxqtTG39xydwekotJES0NRrYQsvgM4bFnz5G8TjbWn+eYuAdiEpLzT5Sim9walo5u62DY3aQa4hextfr2hADI4kU9T/rzNMPw5eSwsc/oTB4BmrqVafsfaF8fgUDRbQ9ZO3Vmxe6niod5PuckmoAblVx74';const _IH='b7145e3c06eff6c23585dd681810dc74c43a0f101368c4f6703c90f8c4582359';let _src;

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
