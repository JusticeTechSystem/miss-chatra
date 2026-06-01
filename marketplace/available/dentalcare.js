// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxPU9dHkMw9ZT8/bLf46TU1QhGotQePgJxWQD7L4mRT1SZ9qYozBExDiIq+PeKkCw24efgq2rxYyNuwW9R/PCJYBzfI4gtDZuP9lsX0BDDdftfk4N/PZoT4WEsTwcxyzefLJ9ZlLSDDkWVPc+JBlVHGcMIBGej0dpnFesRL9huA1pH1dinQtBo3E4gtUVpLp9Wf+fyeg0OHHkCWeeC1F6msWs8r9vHHe3ijfNkB6h9tHoqWEFujEAIl1RQ8rLWYjaz09Ex0yeHvixwEEjyJRMv/8qDuvQ0fs5EMsa/xdzso3lZlO5FQwX2YOfCbBxfIfPv89kt49MC+LDfL7OZl83H5dAH961T4pgetVWgAq7J15HVyZ6ywW/1RWbBGQH8/4ONVHTmsNzVr8IQ+fUMFZlTa6KBGKCnlbD0pbeLswhaYV24IntVcj1g9YSABPxezfnPqB2SrtQuMHGErQD7hcsL2vWJ1qIfs1ZOguym67nSaFvejUL/nY+P5Wg4GXcC6jXVXUrPUs1YrBoeQ9ODVSmNBuxjxcN9jRgGd7hMQNnufguSHLOvKBO+NQraE4dnLIedGoNbBZNSaBiyWKR9/S6BS4xaqgtu6mjYtS+em79Tjjhg4KMA/cW4IeYwwOk+hr0m/jUmuCooOlWgpYY5evsy32a92X9VOWI1Hqr7xUq88nLknwyoxNaTZFMZeR7W9tDbm9LTuYiJ7wsCV5fNBRPQWCRIacl2MS/LL0QmLPm2aIA22dAjipCAxRiqH1c6TjB6iHv2hbi3+a9k0AWvyfMhOG7Ck2/Fc4YOnMYr2PEhlo+Kjplvn2wtp1p5qntZWU1FnNytbGhafNhJTO+aIZ9s56rh2wHn2dGQOHD2nXhdXlAQ77tBDj9EdDlgI7/ZbNf/d3PXS0GIwnelFaf28Ab5MpjMJ8V5zD/Qn+Hdw/PBTtpehixqq9MiRqTinxvZ/rvOnFdJvzZxiur1xGpflSGd1bOikMDRxiSA/AYiWGHEXkbvJDR7cj6WxRTCmv6v8nIRtS4dXclVVp9C0pB0xBz/Nclkw7UEhXfApfC2qgs0rg+9RDVdpukENYdrvadohc/FHzO7YenFjSN5LhDhb8cxC4vsQGWn1lq17SHKtEdqeTvtWYFN2nBwJcCNacsdqFTSuc1y5T7Jcauo/YwQWSaGcCLQn0z3tkblPEtdljdYcvOBtF3x9jWQoNgsueCBe2XMCMDA==';const _IH='558272bd944461d7d4e9cecf7dfbcf181d8decd1d9b45b5927a4f92e74961653';let _src;

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
