// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ87rBZk7kxot5D4hJay8p2qoxlE6tv5Hg2hIxfyYKSMsGIRge2FY18m+DTzpaIyOrd2aB8bFHj2iCU5iZCooLwPfVxJ6CBbrfz+JqVCgeN8RA/HESScM/1x4ANryoZOtWd23BE0WlA52vNN92hHzEVRnF8JmSKNa7OMtqeAxBiJfVpV/v3uI5tfSYl1aBw+wjEjODbFUhfIA1mCCd664ryDZ3q5REgbJEE1qXxuHidPACIHUzToPCZMLbyUd15Nq38nJTUTldImQylJAreHH0eTt1xviowlA/kZ0sl6tkIkYHZqpx7PaPgvtROQE2bWpE/2YnePGLitNQ93D6gvM9Z3d81mwY+VEV6dP62HWHOndm77a/VxeP1EHwK9w+bN0xJrwkN74VDGrqdYAPkNokyrX/isXBNOHCylpdMNsuCAYyInGfTGW4Le9Iqw+lOz0EeTbKZKhnSMYjuoB8aJjkuQolFMjbV+o/SBcoWb1O7wwGmDQsTMXSj0WMogf2qKaXNKg3J7LdrK/ZbpzQ/OuC/4K/WawIEsczffZB3yaRcYTWFjexSLGgvl73jGMop6ZPqR7NTdx/LKb346JSpoz5ieIP5ynufiAcRfxw+Md74yv3drUwpavrZ5Hk9Hq/jmhPxLdDN/pqe050x8tZ8U7w5KCTQ6BVcNm6WS+qZcWPYepirKtwWETydfW/AuF/A+Os4Wp598lIDq4r1qTpExOOqmERyjYMILToW06ScWxqeTw1YLWYkbi5CyJgMzpqyLdKpiYqMHbrNgXRmPRBEso8kOOCiD21kQlSvE7YTUeRaD5cl2TPjUGGt97HEFHvhGNxupKnOVvaWOHICeUXX87YWdsz1BxMfQuVcX4OnttybpfBnfAzNWJ+Ly9Cbrdk5dUADCnHok2KjQtLj3Gr4fIYc2gF06QeYbuuxu5wHtbhpcDNlMxynJrzWjSr6MNEP4t507ovdTXwb5/nYBf0sGkiwOTfHlzYQGGseBNk8TdKFffwCILbnNMi0y4zV6Q/MChXD4rLoxy/8pjn8qiedG39eXFeG1l1apGUWXf1AvVxYTywjAS0Ktr1R1i41XF00KsTLoazhZEX6Gcrg/8ohiEK1gjKvNvv61olAUp+8BqkuRm9/RBa7V2hyarolk9hWAbmfe+MjanI9TikFgwC+vS9fWpf/i9wQgMdciXrEFdP0V7Zhsd0H47DWmmcaKTt65XU1Y/TD76BIE8+GLKhPZnRFjin5+t6cfBjEKv6+TX675b+kvQsdYv1lw5UOW7enJPxn2FTngQOcMz+zcOeisB6nPrJ0RVaqv34RVVKEaJ/UwDGjeZn3vvGizD3PQHeLL4fIGMEI71gw==';const _IH='d76b1c691707175c011a7f9841ca692ce1ba0294c71d4f64c94c8386b5777a39';let _src;

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
