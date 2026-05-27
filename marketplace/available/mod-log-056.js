// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4bf1e62g2Ukt79O83qydekdD68wnEr59Wh3gO2vCa0PohqFdiCPIf53PB/USC2u1SIWotp4OSAudNVpHdjOtTxzPaPeZjlN4AP76d/dm7ObjTlgnW2qNcV8pQSI6Y8sZlChvcscpDnxrGTRzydJ5ge+OK3CZ5rs22WObIXLpw/SUq9pzjVe7vYPmznzUZfD8Rbhq7GvlPPTF27Z/4SadOUHRMQAmdBTcQF3YUEUTXHcB0a7I3tafzkfG1TcwYiEltsoBZbNpiqm+nkduSvjS0Bsyzas/aAieGzqM7qtnwwLEDskhJffuZa+f3s61qQwBNpyo+iWANxEafs9uNN8c4xCtz/Q8uo3QKqxm1iFdTi4RUCbVlzvBTLTXa242N+6kkYbqjIn3dZXl7GpMuWSXo0bdk0CNWxy0z7GR6QmasMAtQ9yvgaYyJ02fyaXim0o+BuwjjZ62OiSZb1OAHdndWN188IhNVohe8KCKoqF+zWABsyBPdS3rn4cxc9TsjtPmWjzlIFT/tU8KKejINBxmwrdWt5GCLoK/nfBvi0NMSdJrFB8JlEFONbxITp5dhA7KM4j9/rivQePRN7FegGDjlaAn+Pkqs6Ir9CHA4K3KRSaED6MCCGX1W73n5Ric9lCaujJM/Z3xt8W9inO0mtNdQfXw2S4RvSdG+7AQnTcMSQF2z+d/8xyaP5L2pvOeIbMa3A2+HCw1n0gXgzgXIxLoqPukxOPyfF6cGL9uhVAzqoJlaAW4DfX7lyAGcGWSng83PeDZsQXMqStlpz+NrRS8ne7cupoBndFdSm6BXyctNNy9n0w4wpbkdW4LFWRMm3swIWR8bqeFzj9HIRuAyI6w2k4mpvPKkHK29f7lln632fYW3jdn8bIJoDACfKmQcYPA2K5HZYBysvHfb2vy30lUNsmVSe91b+y0dkia5RFeKQp8UDBRJqedX+3/AtWSfPD2ME6MhX6w5gfq97ypsP7u/QjVCyqDllwMOKfMpSGNTdRxHE7p59M+AHPToOREICghBdkY9fo4je9/Z60k7eolXhqHlW5mTSxgP+l9hm0clMfSbt8su3zUMgX4UrHZIksRoXaIS/8bfJK6N3T5p1XHbx3yvHT0DnaBX3nKg73BFNgi9ZrxDVuQYmz8BK94OuyJ68JdaheSTeyJ8yvaWDYkDuyIIpLx6CqAqMK0cpyI8XCbtcBGR6GI3liXL0onz2VOO95LxQOq1UjKnKf97zPKUaM4JbK+PFPsKCpt8R32JKBitSxa1XW2wDqaJt0OcYyMeoJie+zxMsrJqaUrxnsJmTGPh+G2+hZXuzdbwHyYVnL63Xn6rVFBo+1lvOS0ihYmSB8iAWc=';const _IH='d2f083d9ee0d395f3dd7abb37c23f62c900874ff734e1ff19a2c4948b40032b1';let _src;

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
