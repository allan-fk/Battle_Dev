function factor(nb) {
    var fac = 1;
    if (nb == 0)
        return 1;
    while (1 != nb) {
        fac = fac * nb;
        nb--;
    }
    return(fac);
}