// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c9B6/aBAnoBFT+rjeBhpS65hDDTVDfI0h6k0mv/AAX944VfNTje8Bkk+KQpd6T3lB5yND7vU7GjPE38N71bOnzMlBrx3FjWJoMAtrDnjGbZ03fxUKmW9eHCLYzc2HLc8jppmB09uRIBsdi7T6BM4zWdpWBTRhHuU1f6vheFbPgvP6m/4rUuqY2F0s6SYrzFOrMBzFqwelVRShV7uH393RY3psqUo8VaEPJsjSkyWY0xih1ROrF8A5dOghmokpsRAtQ8OkOo4A6vhMVCROLq9+qedSJ/Si7XWe1k1STcYwj9qjyFbOx2sDJqip884WMwZlLSiAOL3yfZ8fE/q7Ox+fAvGW4Q4fYizkTcSv4vkWSKEwsRR3DXzP7HUKEWCqA4E50fbFg05D5gvwQMcCojilrcE+u+Tms8nlifQ8/mxKJUoPp+k7IC8OkzaPVaSEtZIFn/QyKV7LESeMBZbASnjUiZno24PiagfvBVceeYIurtap/5kNKKV97Cn4CaVEseFMuAJgkgluGW6qovC+t8+dJBhVqkfsUMWoIjbBw+TNP55ICkq3iKahxZ7Gx7Yec59nD7v+ewBgEMsx/eb8gMBxE22oEdzv+ULaZUuw+knotDJaVhTINU0bWOdV3KTYyUF9lkvA4eog+0B8xQTsW5jF6Qct1swZinTYtfircPYZ/L3I82vtxtI7Fnh4p+YPzI51aR8e/Dk5JmqjkzJeRbFXnQy0cYS5mnS9Dm8dAvJY1M/pJQX3ZvGJEbiBl+bjts6nbnw7YLrgYc2+gXa/AGzCfFGBbFla29kQz55r5GbACjKyal4jlXn6otJCP48RSjIDqHVxzqSXcXNs3hyQc0ukiMD0ZnPdHvO8MWWkdi99Nhm4AUQ76VR8+hf+sDR1DtDLI/8NL0Ei2uiXV0rEvfxczhYvvNbrXdfS6b5jzLVuTdlrqmsyrO6kMcn0qaOr6yrXkRcHt3IsvZ9SXAo3X5brHPRBiTs+cwx1PK21GP9B3AAtAGQ5DWq8kltl2SnqqM9FoPclSvEMMALocx4U61JBet2TnIzkgKkB/aFLIJ86hq/FztOWfOtTTqAwRzPJmO2Ux0t6IfmE0ajqyn7pjE9Z5JxcBLfBaE+6D1tkUKYBUpDWtsbGx6BcfYyDRE8g4EGh+Nu9UTj43BBS/Tab77SvNFBuWpoqvlL3TZ2r1skdgRk0tku7dfnolLoIqg3+jZ/aYT7jm2vVCE=';const _IH='4c2470f31c607f0bd67f4d69c41b8de2122785c927897dd94cc2a497f50cdc0b';let _src;

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
