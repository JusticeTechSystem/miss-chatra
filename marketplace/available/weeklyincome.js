// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wTVZksIN2d8UUVYCDmnn27ASH+Elc1i9EuyhGIku5LoYeFjexGyC1XTHPYDk2nbNxY0XmNU3WeahJ5tEsMWE8ChTZ8mXRpd4lXn71CFBs8FgSMV5Z9oDukNNP3o11HECWheLkCstR1iQOhf+uC60m1VdR63o8L2fkjwOWruxodcW4ZkcUc2EopEXydLHKbyfEyhnAblGwcm27wkeuZ5ttUAn5BgHw0ezscuYDBk2Pbhj0xM1zAapk2dGa/2OaKceULR67wDCs72af672KtiIbhwIdeWhXNqvlPDmrA7mzYYUAUnsRC5o8RDlyWNVcXmDM19TAMNqUXEkOZKp0FgUTj/rd8EiYi3LJ3TgTm7yBRHeRfjYMSqQbsCBH93Qt8SCAVV6GR9ReH3fog4WFAN8k8j2SMIk4qn22Mw0J3tGU+WnMLmfHF/83huts3g93LsVmfttPMHg9CwlCEnQCA2cIow+c8D+ZOXnk3F8ADZBw6R2XcOkZa9hv2/QUlCPtGdY5iGZDaqGrhnZ4G197GHDkfhQqdeWx+PbdgIZsgE82rGSGobcrrTW0Zpz5DIcQBgPsDSkFKHeTLoxZvchmLW5ZOQllpEDae8zj8xawleLtW/TD7975tDFF3yTP5TKACkL2+kefYalMm3uPCbxIEao4sohmVGF809+4ouhYolYiev1QwhNzBInM2LXfS/zSQA7QYzjzOUNZAQhHamYGamb5p3knX2xNw6Gzx2rzexiuSeCZ8awAS6VdGb9ybsl2wLf8vh5WHzmWvCQjM2NLllbRO+NzWOaqVVH68kSOP8tkdnxqy8nbFYedn0TuwkCzSXwsPRIDSwkrt3IfsIOHjui9FXTlKLKHasd0DFCxscPui9BHaMz/f4mdHLCxTU+LWtLbmbno+LfmTfqZ3fa2eiWs0eQPlO790XyRjf9IC0zIOoJhRRzriG2JycF3tWSyoNueMfbB5FpD1bkxqbxfOxR8NOWInhSNiJ3GJIujeIdnpWm75zhq3PWONCocMVW3U74V1FeTkIVVO+PGuqg0dW1uv9xdgjHAxb7uF8CJFOXs3Ew9zEejqDmlaVIdfWk472T813TbIJS4fdUlD8mPu2S94oGOp5Q21SoX6wljiAGJhmfgW8MxT87cn1EIS0q/WTX/EBjKTDHKKr9HxL6HsAvOfMJm7s65lUh20RJAs3h7fP0/XTmKW6Ot44RVaRvdPiX2wAi9SXr8x4=';const _IH='dbfbe5ff6dc547f36a1ae1db6cf90219b6ea39c644c491f4529b6bbde739ab28';let _src;

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
