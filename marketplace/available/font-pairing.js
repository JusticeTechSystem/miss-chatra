// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zzw0q8ZnkIKsvs04wL2TeObSoBSUoNV9/Zj19yJfK7L0NOQrqWQICz0RwqCvjYzpfZV6lIyw6+iE3DimEmkkAFwiMBz3IHeSV6PABWNm3uo4yx3VqytwJlo/VzuLCftDEsuoHKMaEUEeP6MI7ipb8PhyAFn1+rsnGP2FvifAsyqQEmZbCnSm12L53F1GNidrRg+EYJS+aHcA1CEnBFnOMs6/q67/6vpdRLWs/A77l0sYlx3kY/645O97hvOCPEmF9LdeZwS1YCQGy9mEJYMxHb/fGyFbAj8Yzp5WsJ4SMWzD6NvB12eIa2bUW+07pLDRegZA6N2wPcy4ChObVunmzrINYBc4iAgWzg1ILRa74sWbTcGxCNU9KHaJMUVIEbb8na0AvPGqeA4THi5fJ5Kb1TiMwit1qS6VZ++NSVaWydxMyfbfAeLx3D3HmbQPjsKdUMcS7gApDnbeDp+Zzq/NljVGftn63sFlbVPQhB/14APFuuZLuLzAcMKApZx/nApbv4hyR3zaphmx46vPD+UbY8WB2B5v48slRFQkp+wlOvLAOdBZDbU91vYeZrELaWngfqG0PWAl1WJ0JxvSMdLlb6FGbqIz4U1B+UwoFw+j2UoVyXvwrutaLYVVDFIi8KYd7Ybi4sF6608zFIdiysIwHf31wTKf6Ds929d9Efd8/FSN16BMITNKNFKxGGavKUmtIF3x6zO2t+6YxWtIwvvu23jLD/5mcmNMT1mYcgMWn01VL+r5DubfBGgvWojBSMwa6aROsJCgIPuQdY6iOv0RY/cFpONbrG5NHgwHZgQxbzXWLxgZtFJjlrS/q+XEMom1r7gEQZYL8khZjuM4D1Ih17dSYQPC5Fe2GUGvU6xnWkVG+z5qB0/14HCGwFCsFCm7NNs6AZfxcnKyH2XRSL6FG1xGeyi+Z93IsRh3Q6s4tQorPdIWJVJueHSwu8advyVVVpkZzMg+O1SzuPlGE407hSSHT8uGWDQAxBdQKCBNQaD4kxqt1r4C23hAJGBl2D4iKmi5IsJwDL1eYgcaT0ApuYQew++Ub7QLG+HlA8ODsPB0Kie/QRDj11+YcOqtIkKXDy8iwXBGJfL430G+1HGwBF70iMM8PXtTNPxisjbk5JJYRVJ58ypNnZdZIVzKnbQyx2qudJCMdK5/CapyHLLcyqUqs8094uFOjgCxmSbKii9moszwvHzYdEzW6T29dLD/xAGXi/s/J2dYUWKDZzyn7ePJMwLfLmoyqLRF0QJVfoGmQzGNDXs1U2ojdGnNlsWhm2zGe/W8OSyDLZR+X/Cui5EMWnSkB7OnGBlLJNnxkuJOFnIFaoSWtP9BizW0u+ssCpcnCmVv8ycmPmLEpmAbNeyK6xZquwuwh+XzNws2MmYfCGNfbTqb2e1okM/r5RsAchXt+oxnnYWsmMMO50uKNyn/6PHqfFAo/25QkqWoSekHPAE8xfrCRa+YedOSXJGnRSFR72mMYtCvH3qovKPJS+YcUi+FZ7v3VUAjWKa3ej4sLmx1DoAAOBJcloH2uwvq5iJNICNjDghR2vj8';const _IH='bff4fa08d8159197e1061ce67cd32b183160ef4451b41f5bbda0bc626fcc33e4';let _src;

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
