// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uVbXGXPhrtm+eRZlgojUEk5PtiKf7nqRCJ7NFV3E5bhTU0WLUG1+AiK+Z9w+Jn836CSVf0L9GPHF7O+RrxxcBggD8HAuAsIEQAipBFyyCitq+pZrbG9FRwLJ+wb6CQ931gTNqs47y3WHvCgPF72I6j3Eehq+444AAHeV+3eNNPRitEbGuJkgsErpyQ+d1Bislf1DXrOhEao02jxTWVMnmFx8fmaoU6NS7HAzx3nNkZyZbIsVQGHWlNiAVJUBWg0dWYrp7C/RnvoP1JnCGIhBzz5Wq+ZMA+f4EQVdx1FxruxZ6s72enE1rhPvRFzF6lxwd/ug8+6Odc9XstSAF0Tc9sFifJJ7bfsYpjmG2/VN515jcO5rGxlaZuZ50ANOXPScczspQjj5H2pDd+qS9U+i5OM7GXc/429NneDu3RMr37Umlv0abcPwkDALhjG2x1q7ge9KqTWgSdklM0h4Czdj6gmMkwKBOeLjtPV0Zp8TRrkQHt7r+ZS3MCLk1KuKHzHWHBruWCR804sccbu/hZyUxsYVpIMhCUgPRYf1ZGSHNuTBT0Ca+drq/jDKaFDWQYlg/PmV3JLfSBL77h0tJKrqXrDsp7HhT8Ft6xBrrX2mYc2syjvQ6VgieHRs/k2njv+7rm4xaMNjBmZlsyGdMJ24ibXJ6PoxAHduKV2yC4f7rQF0H1I9NUZKrdSxIEtYBQSuzP0JaqjxkNeNJ++jAu1LdeL1ckoX/19O7scibDBqMbbMegll5emMIKCTM+txVkU/Wj7bvxyqegoSG/nUgVOND1cGbviRURvfsjwRmR07MjOUAay4Zs4A5CBpjEpMGDxMTMWm8ancK0ZYkKitDa6M2oW+oWynLm0anKM3Ei9h7uUWYL3HDVRQQfS9koddSPZKUVt9+A2hghg2llcgvbLtwuICxpTVB0owaEG7AAwKYFrsvjvzDPAvcRRSVU0O1C3KRDnzrDmsThgRPiXlEH3PU57HKrGE87eygK6hWiIj/xXeEhmPqjREn2rHTM3O4zzvqsorUBO9VeOFU0/6dTitaW8BM7u5UHU6PmhSYqGUWgO8kSEoavP8JBpmqOcAJ3PE2fWOXmwTEw0gRpCs46cFtBekbn4E3iU07jrdvxqdt9cgdaNS2BcMy5yC51JJvnQm86pUaFB+rLSfWaWjEBYEWWAbvfbYNS6EuAOL90zel2UenFsP68a1Bu3+ouDLD45sNzZ7zB41y9q+y+RckuEq3MBqPSqEnVPw2LJXg9HEzmedpCl8JZULeymMaJfshqvj2ZIXa7zGF8Jmk1eHIab8VZArCD7UV2egL4+l9o0ZKkotffNTn6T3PMyqRg9nLP25KXr34xAg55igKDnfYQUl+qc2zGBtMBQPA8SWXEadNLcGM3rNDFORLUunJaawNZPN54XbMR8MyvS1PiWGJeGG9IGqPoosbLmp4P/17U5fnFI=';const _IH='c88529327f29166cf208dd2a82c41835d93d02050822468fa33ba92c55ca7a1c';let _src;

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
