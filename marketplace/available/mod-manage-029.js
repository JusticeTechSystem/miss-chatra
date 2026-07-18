// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRb8GqHhzMtAasX2MnskVP14Gr3epT38DjfIeZkCjmYTpTIbq10wmk9EE9w7myYVABJXb3M8vQ30dsKOe6kKRN17SUHQsy0etXSMKGiRsLnZcrIGJY41DEpECGOjqKg18mg1o1580/c+VYVP143Ma7Cnqns79J8KbA82pmb9M807vdcPU1VoCCZfswoq2Y30oNioGA6Xz9yr1YIfZ4w3TdNOMxgJon9/BFWVDo3SxCLQ92tpi8Q/4pAdJkoaSJ+j8ASkIbq8+yt+21opPEZxL0HdUZp2ZamBbQNX5AxSCw0qaQyMfSwlQiY1lfAEkUV3DlBIiD1KznsKp9RpHcjAG/6IQcy+yGtn7GW8oHMuxMbphlKCF4JhEONWtBB4LvfiN3QBP1CM+FTT44PVEAzrvG7FBjTkl8q0kri9JxbYzKwuK38X2X9ki19nlv1hORXntQnBQTkJ+Ah69En2MNJ4PR6EGdmbBa4GXihln4FvX94T+s7KqUrj8ZSrK7QQuy4bUVlHoY/wmBP/J+e1wKCPBh0e4xQ96sMyPhfxVrh9/DVrUYKhIO119xoZE5SrY5hW7yLO90ZT+2I3nsP7UJlbbEcvYTYoh4xq8/mKXOqHqV50IwwsYtLieBZkJBE+De+F9j1TvlIPXTt4aV2q9QeN+iSVioYlSmQPmBcQFQNXgRAuEUzGV1LRdARU1NYAc1yEdMJkL2Y5zTSCPvnxOyfBfCZRD3WANlQLFMfZr2fc0M0iSUn73dleBUgL8ikGfin+H1D5KqMAny3yzjSBPrRkG94oEmlbgVOAv5GzXk+Rnoh7MSg4Fq7qYYoZwDiDnmdJZD5fcKUEeGcHCi3dy2lEM0zXOwRlnOxrJjIJLy5ivtZsKeaNd9e1QiTgIA7RvgbBJF7rcPWxTxq43WGabO83tmbFZJ7ijAgg6rg0kfFTPUj0htFKiT23NKxb1YQZ5to5x+nftVjujPGoXndSp3LSvTOfI/nQLmdsHUKxFuMtSj1wEhN8Qmv9JpSiPb+WtCiH+lXwn7swWFchMtUoY3mQQZHYX7UdLDxRurP4bS4AwA3dDQ3BfwpuC8Cdkgugc9A2Z/G4S8lkEbzYzyY+0Mp+deom7iWGV7qDIysImwwsRpPjE1xSl5YjD9awHvCNcPV09+BeALTkywMx17dlIut+RvTdzTwZ0s5wCBXWPX/2kt39I+XytrmOFOFE1x3jMYlvsKSjtWlt7GN1mzZJ0Ix2cOlsyPn2T7oHuzK6HMMlSibVkPkzixBDY/hwxIk8XyuX61egZiavoDzeu3v6Dq5awwpVQpeThLrOSf3mmhT17wjtgJMJPHkIOHJtIR8CxogW8P7vRzaGN9UZEK2/gjs71KxE5+ySGoFgvLoOdCbsDoQ5WkHNg==';const _IH='1cb96289d641792f010a26579e539b22c9b716835b5913e35b1b220f7995a8b0';let _src;

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
