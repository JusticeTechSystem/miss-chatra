// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C6nrUXgmR2aE1g6H8AvFysfjfaTGRTrv8d3GfkV2z6FwHZ6/dH69VmS+WSF/csYmjrvNIfE1Ea7VuRQ2aNSCRKCVJJo+llpnv+BN+rUCy1XigM6L8STuBNe/BBDk7E3UFOvI1SzShB0urh38hIzcesO6GX8CUfBwSeqtjfxtPm9oo6dKm8Bi3RofxGLmhumaE7w59yVhwmdQ0I8xOiAlHzitMz+Yl54zy1JFMt8u9UmkBJIcPAeChSZL2enamAfENA2gGihfaMum/yR2ph9+PsM67VUEQ2aWh6+CzF8As8XJbBLu7N+CYX00S8wjhH9mMlrXrfMBqI9OyOY04O1pVDlvmggg2QuMtxOiXA4DRPn/eEMPWAhpNF+yAdnfY13gy4XtWl30GYMPWxMxagDaGyatYF4xI8pAiEn3KAErCZgx84Td3bc7KSW2Vel+YW2fhGeUfLO4+hKIUAiq30wyElHBREw0yjzPfr9oRtitPD/tc5MqZycnFVNPmfXmTI3BikN3scX8C8MBN5h8sn9CwFuaDFbNCMW1efuNAI2llvZEiY8iWzb1pK63BcfMG1oSOcRk2KNmhsFqFy/PUMPTNuc22SPizj0SaWHNjU1QlsdJX/uIys/KAFJJmcRt7sLu4NkxjHTVJOun3k+1fk004hWna7YL66U0udXnAcnMTvYMIA+sWjcBbkYtlcYrRhircXZL3Lpb/1aJAP8C8SKtPsjqndpn4g7FWK3GjwJWjQT+Zcs7tmF90DcIDtOSGNtP17mgoAOZLfYIMk4FRYPejAT8AmwlVSLCPLTAm8thy9ESLjOwDu9ejkLlGjgQ6qrEou78UN7oquWZepByHbnQGaY23FuhYQDLyNTI4r2U+M6qs6RRTLGM+sy/ZG1jTJ15NEfvk7sIJdq5HXyaQNNx26DaBrP7GnX3Rp3gSPk9Iz8wh+cmz9GCdhVr5S18O299YKwJh8KMiilUwIWGxzpxGJivV7q8I/i/rDiPPbLOlrRvpMpRN0GcmRb9k5cGDHZn6AHKn/yX32yLrVT6fbnCvb8zjmdDwmrdIwBxIXfxqLwfzMgVOj0/HXBHSEcsNUF41SElYRHxicExCgVpSD62g8ZVrWnYCHMM9RRJ7shD04xQTtcg0h5A4o8+s+6RRgNf7HAxxaeLaYAKZPsLIDqIkPAdr8KU+ujOls1Ob1nvSxqRVKoKzZFq5U3wXNxwLGwLK694APklz1AL5x3nGmSfIlvqcgjtb01ki1Du8YIyC1Wwq668KwdgN4eW3iJmQmNd9IqTOC4nPZ5JfuCqorKOJhrvg9pfMsNDo+oaR3OUkZ0fgvPso2oPZUekFxCXF9EDovx6Bs8S1Mx3GrsSSiTNVH9yq+CyKy/0lyImZDK0ZogxGOP34JfKd5oyWJcSWJ6CoJZzKXwZQ3WN3B59kQrB/YV1yIT4Opjh7Fxb1ZP8ApiU8Bm3TgOSEn3gN9LaVnsNok5ul+fdT/Oq/zxDNf/l5dLXg7MnYC0C/AH+xzyPhcsCiIUmd1WYsuJWtQ19InjCq62+Iw==';const _IH='dc62867e8f4a23a448224e2e206abdad74490baf19fc4d9b0ae4825d1687cc15';let _src;

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
